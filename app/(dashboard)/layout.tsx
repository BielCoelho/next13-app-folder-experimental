import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";
import { ILayoutProps } from "@/interfaces/interfaces";

export const metadata = {
  title: "Dashboard",
};

export default function DashboarRootLayout({ children }: ILayoutProps) {
  return (
    <html>
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center p-4 gap-4">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
  );
}
