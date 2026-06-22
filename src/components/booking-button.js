import React, {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {Mail, X} from 'lucide-react';
import {Button} from '@site/src/components/ui/button';
import {bookingSection, bookingUrl, contactEmail} from '@site/src/data/siteContent';

const isConfigured = bookingUrl && bookingUrl !== 'GOOGLE_CALENDAR_BOOKING_URL';

// 預約按鈕：點擊後彈出含 Google Calendar 預約時間表的 modal。
// 接受所有 Button 的 props（size / variant / className 等）。
export default function BookingButton({children, label = '預約需求討論', ...buttonProps}) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!open) {
      setLoaded(false);
      return undefined;
    }
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const modal = (
    <div
      className="booking-modal"
      role="dialog"
      aria-modal="true"
      aria-label={bookingSection.title}
      onClick={() => setOpen(false)}>
      <div className="booking-modal__panel" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="booking-modal__close"
          aria-label="關閉預約視窗"
          onClick={() => setOpen(false)}>
          <X className="h-5 w-5" />
        </button>

        {isConfigured ? (
          <>
            {!loaded ? (
              <div className="booking-modal__loading" aria-live="polite">
                <span className="booking-modal__spinner" aria-hidden="true" />
                <span>載入預約時間表…</span>
              </div>
            ) : null}
            <iframe
              src={bookingUrl}
              title="Google Calendar 預約時間表"
              className="booking-modal__iframe"
              loading="lazy"
              frameBorder="0"
              onLoad={() => setLoaded(true)}
            />
          </>
        ) : (
          <div className="booking-modal__placeholder">
            <p>預約時間表尚未設定。</p>
            <a className="booking-modal__fallback-link" href={`mailto:${contactEmail}`}>
              <Mail className="h-4 w-4" />
              {contactEmail}
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)} {...buttonProps}>
        {children || label}
      </Button>

      {open && typeof document !== 'undefined'
        ? createPortal(modal, document.body)
        : null}
    </>
  );
}
