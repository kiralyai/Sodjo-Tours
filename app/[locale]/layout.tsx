import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Header } from "@/components/site-shell";
import { dictionary, locales, type Locale } from "@/lib/site-data";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; const isNl = locale === "nl"; return { title: { default: "Sodjo Tours | Brokopondo fishing expeditions", template: "%s | Sodjo Tours" }, description: isNl ? "Meerdaagse visexpedities op het Brokopondo-stuwmeer in Suriname." : "Multi-day fishing expeditions on Suriname's Brokopondo Reservoir.", alternates: { canonical: `/${locale}`, languages: { en: "/en", nl: "/nl" } }, robots: { index: true, follow: true } }; }
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) { const { locale } = await params; if (!locales.includes(locale as Locale)) notFound(); const l = locale as Locale; return <><Header locale={l} t={dictionary[l]} />{children}<Footer locale={l} /></>; }
