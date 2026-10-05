import { company } from "./site-data";

export function whatsappUrl(message: string) {
  return company.whatsapp ? `https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}` : `https://wa.me/?text=${encodeURIComponent(message)}`;
}
