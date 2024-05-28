import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "flowbite-react";

const Shop = () => {
	const [books, setBooks] = useState([]);

	let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/book"; 
    navigate(path);
  }

	useEffect(() => {
		fetch("http://localhost:5000/all-books")
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);
	return (
		<div className='mt-28 px-4 lg:px-24'>
			<h2 className='text-5xl font-bold text-center'>
				All Books are Here
			</h2>

			<div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
				{books.map((book) => (
					<Card className='max-w-sm'>
						<img
							src={book.imageURL}
							alt=''
							className='h-96'
						/>
						<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
							{book.bookTitle}
						</h5>
						<p className='font-normal text-gray-700 dark:text-gray-400'>
							Here are the biggest enterprise technology
							acquisitions of 2021 so far, in reverse
							chronological order.
						</p>
						<Link to={`/book/${book._id}`}>
						<button className='bg-blue-700 font-semibold py-2 rounded text-white' >
							Buy Now
						</button>
						</Link>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Shop;
