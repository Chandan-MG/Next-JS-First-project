import { useRouter } from 'next/router';

const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

function DeveloperPage() {
    const router = useRouter();
    const { developerID } = router.query;

    const developer = details.find(dev => dev.id === parseInt(developerID));

    return (
        <div>
            {developer ? (
                <h1>{developer.name}, {developer.role}</h1>
            ) : (
                <h1>Developer doesn't exist</h1>
            )}
        </div>
    );
}

export default DeveloperPage;
