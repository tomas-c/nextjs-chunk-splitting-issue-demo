import Link from "next/link";

export const Menu = () => {
    return <ul>
        <li>
            <Link href="/first">
                <a>First</a>
            </Link>
        </li>
        <li>
            <Link href="/second">
                <a>Second</a>
            </Link>
        </li>
    </ul>
};

export default Menu;