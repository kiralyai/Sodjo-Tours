"use client";
import { useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { type Dictionary } from "@/lib/site-data";

const inputClass = "form-input";
export function BookingForm({ t, compact = false }: { t: Dictionary; compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false); const [loading, setLoading] = useState(false);
  if (submitted) return <div className="form-success" role="status"><CheckCircle2 size={32}/><h3>{t.book.success}</h3><p>{t.book.successCopy}</p></div>;
  function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setLoading(true); window.setTimeout(() => { setLoading(false); setSubmitted(true); }, 650); }
  const f = t.form;
  return <form className={compact ? "booking-form compact" : "booking-form"} onSubmit={submit}><div className="field-grid"><label>{f.date}<input className={inputClass} type="date" required /></label><label>{f.guests}<select className={inputClass} required defaultValue=""><option value="" disabled>{f.select}</option><option>{f.guest1}</option><option>{f.guest2}</option><option>{f.guest34}</option><option>{f.guest5}</option></select></label></div>{!compact && <><label>{f.level}<select className={inputClass} defaultValue=""><option value="" disabled>{f.selectLevel}</option><option>{f.never}</option><option>{f.beginner}</option><option>{f.recreational}</option><option>{f.experienced}</option></select></label><label>{f.pickup}<input className={inputClass} placeholder={f.pickupPlaceholder} /></label></>}<div className="field-grid"><label>{f.name}<input className={inputClass} required autoComplete="name" /></label><label>{f.email}<input className={inputClass} type="email" required autoComplete="email" /></label></div><div className="field-grid"><label>{f.phone}<input className={inputClass} type="tel" autoComplete="tel" /></label><label>{f.country}<input className={inputClass} autoComplete="country-name" /></label></div>{!compact && <label>{f.notes}<textarea className={inputClass} rows={4} placeholder={f.notesPlaceholder} /></label>}<button className="button button-full" disabled={loading}>{loading ? <LoaderCircle className="spin" size={18}/> : null}{t.book.submit}</button><p className="form-note">{t.book.note}</p></form>;
}
