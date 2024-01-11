import React from 'react'

export default function Header(props) {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">KAMLESH KHATOD</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">React Assignment I</h1>
      <ul className="lg:w-1/2 mx-auto leading-loose font-normal text-black text-start">
        <li>taxi : {props.taxi}</li>
        <li>food : 
            <ul className='ml-8'>
                <li>sushi : {props.sushi}</li>
                <li>apple : 
                    <ul className='ml-8'>
                        <li>honeycrisp : {props.honey}</li>
                        <li>fuji : {props.fuji}</li>
                    </ul>
                </li>
            </ul>
        </li>
      </ul>
    </div>
  </div>
</section>
    </div>
  )
}
