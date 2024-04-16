import React from 'react'

export default function Footer() {
  const footerList = [
    {
      title: "Company",
      childrens: [
        { label: "API Developer" },
        { label: "Career" },
        { label: "Our Story" },
        { label: "New Soon" },
      ]
    },
    {
      title: "Student",
      childrens: [
        { label: "Get Scholarship" },
        { label: "Our Pathskills" },
        { label: "All Features" },
        { label: "Refund Policy" },
      ]
    },
  ]
  return (
    <footer className='bg-background-secodary text-white'>
      <div className="container pt-12 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {footerList.map((el, i) => (
            <div key={i}>
              <div>{el.title}</div>
              {el.childrens.map((children, i2) => (
                <div key={i2} className='text-[#53589D]'>{children.label}</div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </footer>
  )
}
