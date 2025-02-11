export default function NewForm() {
    return (
        <form>
      <div>
        <label htmlFor="title">Description</label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input type="text" id="amount" name="amont" />
      </div>
      <input type="submit" value="Add New" />
    </form>
    )
}