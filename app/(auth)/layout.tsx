import GlassPane from "@/components/GlassPane";
import { ILayoutProps } from "@/interfaces/interfaces";

export const metadata = {
  title: "Bem vindo",
};

export default function AuthRootLayout({ children }: ILayoutProps) {
  return (
    <html>
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
