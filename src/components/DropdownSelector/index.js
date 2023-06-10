import Form from 'react-bootstrap/Form';

function DropdownSelector({defaultValue, options}) {
  console.log("options", options)
  return (
    <div className='position-absolute bottom-0 start-0 mx-3 my-3' style={{ zIndex: 1000 }}>
      <Form.Select >
        {defaultValue && <option>{defaultValue}</option>}
        {options.map((option) => <option value={option.value}>{option.label}</option>)}
      </Form.Select>
    </div>
  );
}

export default DropdownSelector;