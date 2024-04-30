import { Fragment } from "react";
import Link from 'next/link';

const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

function AboutUsPage(){
    return(
        <Fragment>
            <ul>
                {details.map((detail)=>(
                    <li key={detail.id}>
                        <Link href={`/aboutus/${detail.id}`} >
                            {detail.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default AboutUsPage;