import React,{useState,useEffect} from 'react';
import './App.css';
import Timer from './timer';

function App() {
   
    const [data, setData] = useState(null);
    const [page,setPage] = useState(0);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
          );
          const data = await response.json();
      
          setData(data.hits);
          setPage((prevPage) => prevPage + 1);
         
          
        } catch (error) {
          console.error('Error fetching Data:', error);
        }
      };
  
      const intervalId = setInterval(fetchData, 8000);
       
     
  
      return () => {
        clearInterval(intervalId);
      };
    }, [page]);


  console.log(data);



    return (
      <>
      <Timer />
        {data &&
          <div className="card"    >
        <table   border={2}  style={{width:"100%",margin:"0 px ",border: "1px "}}>
          <thead style={{color:"blue"}}>
            <tr >
              <th>Title</th>
              <th>URL</th>
              <th>Created At</th>
              <th>Author</th>
              
            </tr>
          </thead>
          <tbody>
          {data.map((data,i) => {
            return (
              <>
              <tr key={i}>
                <td>{data.title}</td> 
                <td>{data.url}</td>
                <td>{data.createdAt}</td>
                <td>{data.author}</td>
                
              </tr>
              </>
           
            );
          })}
          </tbody>
          </table>
          </div>
          }
      </>
    );
  };
export default App;


