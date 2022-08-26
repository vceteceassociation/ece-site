import Image from "next/image"

const HoDDesk = () => {
  return (
    <div className="my-9">
      <div className="card w-11/12 sm:w-8/12 md:w-1/2 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title font-head">A Note from our HoD</h2>
          <div className="avatar pt-4">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
              <Image
                src="/Dr.-S.-Vasuki.jpg"
                height="150"
                width="150"
                alt="HOD"
              />
            </div>
          </div>
          <p className="mx-auto underline py-1"> Dr. S. Vasuki </p>
          <p>
            A hearty welcome to the Department of Electronics and Communication
            Engineering of Velammal College of Engineering and Technology,
            Madurai. Since its inception from 2007, the department of ECE has
            been the front runner in imparting quality technical education to
            the students. The department has well qualified and experienced
            faculty members who are passionate towards moulding the younger
            generation. The rich technical ambience, highly enthusiastic faculty
            members, state of the art laboratories and the able support from the
            management have made the students perform with distinction in their
            career pursuit. Moreover, the department of ECE is making huge
            strides in Research and Development. It has procured funded projects
            from DRDO, AICTE and DST worth of Rs. 258.716 lakhs in a short span
            of three years. Students have proved themselves by getting placed in
            top MNC companies like TCS, CS, Wipro, Accenture, Aricent, HP, UST
            Global, Zoho, Athena Healthcare, etc. The department has also got a
            worldwide reach with its vibrant alumni network. Working in close
            association with the institution, the department constantly aims to
            reach greater heights inorder to serve the needs of the society and
            meet the aspirations of the student community.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HoDDesk
