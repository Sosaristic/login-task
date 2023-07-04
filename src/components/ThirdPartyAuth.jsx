import Link from "next/link";
import Image from "next/image";

export default function ThirdPartyAuth() {
  return (
    <div className="mt-4">
      <div className="flex items-center text-primary">
        <span className="min-w-[30%] min-h-[1px] flex-1 bg-primary"></span>
        Or Sign In With <span className="min-w-[30%] min-h-[1px] flex-1 bg-primary"></span>
      </div>
      <div className="flex justify-center gap-4 lg:gap-8 mt-4">
        <div>
          <Link href={""}>
            <Image src={"/svg/google.svg"} width={50} height={50} />
          </Link>
        </div>
        <div>
          <Link href={""}>
            <Image src={"/svg/facebook.svg"} width={50} height={50} />
          </Link>
        </div>
        <div>
          <Link href={""}>
            <Image src={"/svg/twitter.svg"} width={50} height={50} />
          </Link>
        </div>
      </div>
    </div>
  );
}
