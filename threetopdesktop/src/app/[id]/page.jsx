
import '../globals.css';
import { db } from "../../../firebaseConfig";
import { collection, doc, query, where, getDoc } from 'firebase/firestore';
import Image from 'next/image';

export async function getData(x) {
  let data = [];

  const docRef = doc(db, 'users', x);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()
  }

  return data
}


export default async function Id({ params }) {
     const data = await getData(params.id);
    console.log(data);
  return (
    <main className='p-1 md:p-10 bg-slate-600'>
       <h1 className='text-4xl text-center mb-10 font-bold text-white'>{data.fullName}</h1>

       <div className="container mx-auto flex flex-col justify-center align-middle gap-10 h-auto sm:flex-row sm:w-full">
            <div className='bg-white w-full shadow rounded-md overflow-hidden sm:w-2/5 h-fit sm:sticky top-10'>
                <p className='bg-green-300 text-white p-1 text-center'>Personal Info</p>
                <div className='p-3'>
                    <p className='text-sm mb-1'><span className='font-semibold'>Passport Number:</span> {data.passportNumber}</p>
                    <p className='text-sm mb-1'><span className='font-semibold'>Issue Date:</span> {data.issueDate}</p>
                    <p className='text-sm mb-1'><span className='font-semibold'>Expiry Date:</span> {data.expiryDate}</p>
                    <p className='text-sm mb-1'><span className='font-semibold'>Phone Number:</span> {data.phone}</p>
                    <p className='text-sm mb-1'><span className='font-semibold'>Date of Birth:</span> {data.dob}</p>
                    <p className='text-sm mb-1'><span className='font-semibold'>Gender:</span> {data.gender}</p>
                    <p className='text-sm mb-1'><span className='font-semibold'>City of Birth:</span> {data.cityOfBirth}</p>
                    <p className='text-sm mb-1'><span className='font-semibold'>Address:</span> {data.address}</p>
                </div>
            </div>

            <div className='flex-auto bg-green-100 rounded overflow-hidden h-auto'>

              <div>
                <h3 className='p-5 text-sm bg-green-200 font-bold'>Application History</h3>
                <div className="bg-green-50 mb-4">
                {
                  data.applicationHistory.applications.map((ele) =>(
                    <>
                      <div className='px-3 flex justify-between my-1 '>
                        <h2 className='font-semibold'>Country: </h2>
                        <p>{ele.country}</p>
                      </div>

                      <div className='px-3 flex justify-between my-1'>
                        <h2 className='font-semibold'>Date of Application: </h2>
                        <p>{ele.dateOfApplication}</p>
                      </div>

                      <div className='px-3 flex justify-between my-1'>
                        <h2 className='font-semibold'>Status </h2>
                        <p>{ele.status}</p>
                      </div>

                      <div className='px-3 flex justify-between my-1'>
                        <h2 className='font-semibold'>Issue Date </h2>
                        <p>{ele.issueDate ? ele.issueDate : '-'}</p>
                      </div>

                      <div className='px-3 flex justify-between my-1'>
                        <h2 className='font-semibold'>Expiry Date </h2>
                        <p>{ele.expiryDate ? ele.expiryDate : '-'}</p>
                      </div>

                      <div className='px-3 flex justify-between my-1'>
                        <h2 className='font-semibold'>Denial Date </h2>
                        <p>{ele.denialDate ? ele.denialDate : '-'}</p>
                      </div>

                      <div className='px-3 flex justify-between my-1'>
                        <h2 className='font-semibold'>Reason for Denial </h2>
                        <p>{ele.reason ? ele.reason : '-'}</p>
                      </div>
                    </>
                  ))
                }
                </div>


              </div>

              <div>
                <h3 className='p-5 text-sm bg-green-200 font-bold'>Travel History</h3>
                {
                data.travelDetails.map((ele) =>(
                  <>
                        <div className='px-3 flex justify-between my-1 '>
                          <h2 className='font-semibold'>Country: </h2>
                          <p>{ele.country}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1'>
                          <h2 className='font-semibold'>Purpose of Travel: </h2>
                          <p>{ele.purpose}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1'>
                          <h2 className='font-semibold'>From </h2>
                          <p>{ele.from}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1'>
                          <h2 className='font-semibold'>To </h2>
                          <p>{ele.to}</p>
                        </div>

                  
                  </>
                ))
                }
              </div>

              <div>
                <h3 className='p-5 text-sm bg-green-200 font-bold'>Education</h3>
                {
                data.education.map((ele) =>(
                  <>
                        <div className='px-3 flex justify-between my-1 '>
                          <h2 className='font-semibold'>Institution: </h2>
                          <p>{ele.school}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1'>
                          <h2 className='font-semibold'>Certification: </h2>
                          <p>{ele.certification}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1'>
                          <h2 className='font-semibold'>Course </h2>
                          <p>{ele.course ? ele.course : '-'}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1'>
                          <h2 className='font-semibold'>From </h2>
                          <p>{ele.from}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1'>
                          <h2 className='font-semibold'>To </h2>
                          <p>{ele.to}</p>
                        </div>

                  
                  </>
                ))
                }
              </div>

              <div>
                <h3 className='p-5 text-sm bg-green-200 font-bold'>Occupation</h3>
                {
                data.jobs.map((ele) =>(
                  <>
                        <div className='px-3 flex justify-between my-1 '>
                          <h2 className='font-semibold'>Company: </h2>
                          <p>{ele.company}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1'>
                          <h2 className='font-semibold'>Position: </h2>
                          <p>{ele.position}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1'>
                          <h2 className='font-semibold'>Job Description </h2>
                          <p>{ele.jobTitle}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1'>
                          <h2 className='font-semibold'>From </h2>
                          <p>{ele.from}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1'>
                          <h2 className='font-semibold'>To </h2>
                          <p>{ele.to}</p>
                        </div>

                          <div className='px-3 flex justify-between my-1'>
                          <h2 className='font-semibold'>Address </h2>
                          <p>{ele.address}</p>
                        </div>

                  
                  </>
                ))
                }
              </div>

              <div>
                <h3 className='p-5 text-sm bg-green-200 font-bold'>Family</h3>

                        <div className='px-3 flex justify-between my-1 '>
                          <h2 className='font-semibold'>Marital Status: </h2>
                          <p>{data.family.maritalStatus}</p>
                        </div>

                        {
                          data.family.spouseName && (
                            <div className='px-3 flex justify-between my-1 '>
                              <h2 className='font-semibold'>Spouse Name: </h2>
                              <p>{data.family.spouseName}</p>
                            </div>
                          )
                        }

                        {
                          data.family.spouseDob && (
                            <div className='px-3 flex justify-between my-1 '>
                              <h2 className='font-semibold'>Spouse Dob: </h2>
                              <p>{data.family.spouseDob}</p>
                            </div>
                          )
                        }

                        {
                          data.family.marriageDate && (
                            <div className='px-3 flex justify-between my-1 '>
                              <h2 className='font-semibold'>Marriage Date: </h2>
                              <p>{data.family.marriageDate}</p>
                            </div>
                          )
                        }


                        {
                          data.family.divorceDate && (
                            <div className='px-3 flex justify-between my-1 '>
                              <h2 className='font-semibold'>Marriage Date: </h2>
                              <p>{data.family.divorceDate}</p>
                            </div>
                          )
                        }

                        {
                          data.childDetail.map(ele =>(
                            <div>
                              <h3 className='p-5 text-sm bg-green-200 font-bold'>Children</h3>
                              {
                                data.childDetail.length > 0 && (
                                  <>
                                    <div className='px-3 flex justify-between my-1 '>
                                      <h2 className='font-semibold'>Name: </h2>
                                      <p>{ele.childName}</p>
                                    </div>

                                    <div className='px-3 flex justify-between my-1 '>
                                      <h2 className='font-semibold'>Gender: </h2>
                                      <p>{ele.childGender}</p>
                                    </div>

                                    <div className='px-3 flex justify-between my-1 '>
                                      <h2 className='font-semibold'>Date of Birth: </h2>
                                      <p>{ele.childDob}</p>
                                    </div>

                                    <div className='px-3 flex justify-between my-1 '>
                                      <h2 className='font-semibold'>Address: </h2>
                                      <p>{data.family.father.address}</p>
                                    </div>
                                  </>
                                  
                                )
                              }

                          </div>
                          ))
                        }


              <div>
                <h3 className='p-5 text-sm bg-green-200 font-bold'>Parent Info (Father)</h3>
                        <div className='px-3 flex justify-between my-1 '>
                          <h2 className='font-semibold'>Name: </h2>
                          <p>{data.family.father.name}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1 '>
                          <h2 className='font-semibold'>Date of Birth: </h2>
                          <p>{data.family.father.dateOfBirth}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1 '>
                          <h2 className='font-semibold'>Occupation: </h2>
                          <p>{data.family.father.occupation}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1 '>
                          <h2 className='font-semibold'>Address: </h2>
                          <p>{data.family.father.address}</p>
                        </div>


              </div>

              <div>
                <h3 className='p-5 text-sm bg-green-200 font-bold'>Parent Info (Mother)</h3>
                       <div className='px-3 flex justify-between my-1 '>
                          <h2 className='font-semibold'>Name: </h2>
                          <p>{data.family.mother.name}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1 '>
                          <h2 className='font-semibold'>Date of Birth: </h2>
                          <p>{data.family.mother.dateOfBirth}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1 '>
                          <h2 className='font-semibold'>Occupation: </h2>
                          <p>{data.family.mother.occupation}</p>
                        </div>

                        <div className='px-3 flex justify-between my-1 '>
                          <h2 className='font-semibold'>Address: </h2>
                          <p>{data.family.mother.address}</p>
                        </div>

              </div>

              </div>

                <h3 className='p-5 text-sm bg-green-200 font-bold'>Files</h3>
              <div className='grid grid-cols-3 gap-5'>
                  {
                    data.files.map(ele => (
                      // <Image src={ele} alt="inserted" height="300"  width="300"/>
                      <img src={ele} alt="wow" />
                    ))
                  }
              </div>

            </div>

       </div>
    </main>
  )
}
