import Link from 'next/link';
import React from 'react';

const index = ({ users }) => {

    return (
        <div>
            <h1>Total User : {users.length}</h1>

            {
                users.map((user, index) => <div key={index}>

                    <h1>{user.name}</h1>

                    <Link href={`users/${user.id}`} >
                        <button>view</button>
                    </Link>

                </div>)
            }



        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json()
    return {
        props: { users: data }, // will be passed to the page component as props
    }
}