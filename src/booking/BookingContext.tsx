import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface BookingContextValue {
  isOpen: boolean;
  /** Opens the booking modal, optionally pre-selecting a service. */
  open: (service?: string) => void;
  close: () => void;
  preselectedService: string;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const open = useCallback((service?: string) => {
    setPreselectedService(service ?? "");
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, open, close, preselectedService }), [isOpen, open, close, preselectedService]);

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
  return ctx;
}
