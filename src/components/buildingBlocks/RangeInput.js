export function RangeInput({ min, max, value, onChange }) {
  return (
    <input type='range' step='0.001' onChange={handleChange} {...{ value, min, max }} />
  )

  function handleChange(e) {
    onChange(Number(e.currentTarget.value))
  }
}
