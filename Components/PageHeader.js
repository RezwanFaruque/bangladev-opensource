import pstyle from '../styles/PageHeader.module.scss';
import Link from 'next/link';

const PageHeader = ()=>{
    return(
        <div className={pstyle.pageheader}>
            <div className={pstyle.title}>
                Posts
            </div>
            <div className={pstyle.links}>
                <ul>
                    <li>
                        <Link href="/"><a>Latest</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Last Week</a></Link>
                    </li>

                    <li>
                        <Link href="/"><a>Last Month</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PageHeader;