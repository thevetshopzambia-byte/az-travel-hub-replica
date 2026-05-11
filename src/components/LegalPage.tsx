import { ReactNode } from "react";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl lg:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-8 prose max-w-none text-foreground/85 space-y-4 leading-relaxed">
          {children}
        </div>
        <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>
            <strong>AZ Travel Hub Limited</strong> — Agora Village, Thabo Mbeki Road, Lusaka. Reg No 120261043371.
          </p>
        </div>
      </div>
    </div>
  );
}
