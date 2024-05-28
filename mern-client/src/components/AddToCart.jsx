// import React, { useState } from 'react';
// import { Table } from 'flowbite-react';

// const AddToCart = ({ book }) => {
//   const [quantity, setQuantity,allBooks] = useState(1);

//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     const [allBooks, setAllBooks] = useState([]);
// 	{console.log("data")}
// 	useEffect( () => {
// 		{console.log("h1")}
// 		fetch("http://localhost:5000/Addedbook")
// 			.then((res) => res.json())
// 			.then((data) => setAllBooks(data));
			
// 	}, []);

//     // Send data to Database
// 		fetch("http://localhost:5000/Addedbook", {
// 			method: "POST",
// 			headers: {
// 				"Content-type": "application/json",
// 			},
// 			body: JSON.stringify(bookObj),
// 		})
// 			.then((res) => res.json())
// 			.then((data) => {
// 				alert("Book Uploaded Successfully!");
// 				form.reset();
// 			});
//     console.log(`Added ${quantity} ${book.title} to cart`);
//   };

//   return (
//     <div className='px-4 my-12'>
// 			<h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

// 			{/* Table for book data */}
// 			<Table className='lg:w-[1180px]'>
// 				<Table.Head>
// 					<Table.HeadCell>No.</Table.HeadCell>
// 					<Table.HeadCell>Book Name</Table.HeadCell>
// 					<Table.HeadCell>Author Name</Table.HeadCell>
// 					<Table.HeadCell>Category</Table.HeadCell>
// 					<Table.HeadCell>Prices</Table.HeadCell>
// 					<Table.HeadCell>Edit or Manage</Table.HeadCell>
// 				</Table.Head>

// 				{allBooks.map((book, index) => (
// 					<Table.Body
// 						className='divide-y'
// 						key={book._id}
// 					>
// 						<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
// 							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
// 								{index + 1}
// 							</Table.Cell>
// 							<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
// 								{book.bookTitle}
// 							</Table.Cell>
// 							<Table.Cell>{book.authorName}</Table.Cell>
// 							<Table.Cell>{book.category}</Table.Cell>
// 							<Table.Cell>$10.00</Table.Cell>
// 							<Table.Cell>
// 								<Link
// 									to={`/admin/dashboard/edit-books/${book._id}`}
// 									className='font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5'
// 								>
// 									Edit
// 								</Link>
// 								<button
// 									onClick={() => handleDelete(book._id)}
// 									className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 '
// 								>
// 									Delete
// 								</button>
// 							</Table.Cell>
// 						</Table.Row>
// 					</Table.Body>
// 				))}
// 			</Table>
// 		</div>
  
//   );
// };



// // import React from "react";

// // const AddToCart =() => {
// //     return <div>
// //         <h1>hello</h1>
// //     </div>
// // }

// export default AddToCart;


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "flowbite-react";

const AddToCart = () => {
	const [books, setBooks] = useState([]);

	let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/book"; 
    navigate(path);
  }

	useEffect(() => {
		fetch("http://localhost:5000/carts")
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);
	return (
		<div className='mt-28 px-4 lg:px-24'>
			<h2 className='text-5xl font-bold text-center'>
				Books in Your Cart
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

export default AddToCart;
