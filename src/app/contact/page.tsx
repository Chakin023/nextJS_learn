import { Button } from "@/components/ui/button";
import Link from "next/link";

 export default function ContractPage() {
   return (
     <main>
       <h1 className="bg-amber-50">Hello contract page</h1>
       <p className="font-k2d">สวัสดีครับ K2D</p>
       <p className="font-kanit">สวัสดีครับ Kanit</p>
       <p className="font-sarabun">สวัสดีครับ Sarabun</p>
       <Button asChild>
          <Link href='/'>Back to Homepage</Link>
        </Button>
     </main>
   );
 }