import Image from "next/image";
import Link from "next/link";
import styles from "./LinkButton.module.scss";

interface LinkButtonProps {
  href: string;
  src: string;
  title: string;
}

export default function LinkButton({ href, src, title }: LinkButtonProps) {
  return (
    <Link href={href} className={styles.link}>
      <Image className="" src={src} alt="icon" width={20} height={20} />
      <p className={styles.title}>{title}</p>
    </Link>
  );
}
