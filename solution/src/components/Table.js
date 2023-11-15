
/* The Table Component was a simple implementation, where the table's job is to display the data passed into it. 
    The one difference from the mock diagram is that I added a way for the user to remove an individual item from the table. 
    This component receives both the data and a function that removes data at a certain index. */
const Table = ({data, onRemoveData}) => {
  return (
    <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.country}</td>
                    <td className="d-flex justify-content-end">
                        <button className="btn btn-close " onClick={() => onRemoveData(index)} aria-label="Close"></button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table