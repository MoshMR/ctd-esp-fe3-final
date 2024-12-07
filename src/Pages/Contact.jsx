import { Form } from '../Components/Form'

const Contact = () => {
  return (
    <div className='my-10 flex flex-col items-center justify-center gap-4'>
      <h2 className='font-bold text-blue-900 text-lg'>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact