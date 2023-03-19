import Link from "next/link";

export default function NavLink({to, children}) {
  return (
	
	<Link href={to}>
		<span className="text-gray-500 hover:text-primary hover:underline font-semibold">
		{children}
		</span>
	</Link>
	
  )
}
