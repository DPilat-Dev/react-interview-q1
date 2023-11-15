
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