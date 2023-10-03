import { useRouter } from 'next/router';

function BookDetails() {
  const router = useRouter();
  const { query } = router;

  // Access specific query parameters
  const id = query.id;
 

  return (
    <div>
    <h1>Opening book details with ID {id} </h1>
   
  </div>

  );
}

export default BookDetails;
