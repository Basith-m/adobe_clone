import React from 'react'
import './LandingPage.css'
import { Button } from '@mui/material'
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';

function LandingPage() {
  return (
    <>
        <div className='landing-container w-100'>
            <div className='d-flex px-5 py-3 flex-column w-100'>
                <div>
                    <h1 style={{color:'black'}}>Creative Plans. Designed for you. </h1>
                    <p style={{color:'black'}}>Explore video, photo, design, and more with a Creative Cloud plan that works for you.</p>
                    <Button style={{fontSize:'13px'}} className='border-2 rounded-5 border-black text-black fw-bold text-capitalize' variant="outlined">See All Plans</Button>
                </div>
                <div className='d-flex justify-content-between align-items-center pt-5 flex-wrap'>
                    <div>
                    <Card style={{backgroundColor: 'rgba(251,251,251,0.26)' ,color:'black',width:'39rem' }} className=' border-2 border-light p-2'>
                        <Card.Body>
                            <Card.Title>Creative Cloud All Apps</Card.Title>
                            <Card.Text className='mb-4'>
                                <p style={{fontSize:'16px'}}>US$54.99/mo</p>
                                <p style={{fontSize:'16px'}}>
                                Get Photoshop, Illustrator, and 20+ apps, now with generative AI tools powered by Adobe Firefly. <span style={{textDecoration:'underline'}}>See student pricing.</span>
                                </p>
                            </Card.Text>
                            <div className='line-divider mb-3'></div>
                            <div className='d-flex justify-content-end align-items-center'>
                                <Button style={{fontSize:'12px'}} variant="outlined" className='border-2 border-black rounded-5 text-black fw-bold me-4 text-capitalize'>Buy now</Button>
                                <Button style={{fontSize:'12px'}} className='border-2 rounded-5 fw-bold text-capitalize' variant="contained">Free trial</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                    <div>
                    <Card style={{backgroundColor: 'rgba(251,251,251,0.26)'  ,color:'black',width:'39rem' }} className='border-2 border-light p-2'>
                        <Card.Body>
                            <Card.Title>Acrobat Pro Single App</Card.Title>
                            <Card.Text className='mb-4'>
                                <p style={{fontSize:'16px'}}>US$19.99/mo</p>
                                <p style={{fontSize:'16px'}}>
                                Stay connected across desktop, mobile, and web with the complete PDF solution for working anywhere.
                                </p>
                            </Card.Text>
                            <div className='line-divider mb-3'></div>
                            <div className='d-flex justify-content-end align-items-center'>
                                <Button style={{fontSize:'12px'}} variant="outlined" className='border-2 border-black rounded-5 text-black fw-bold me-4 text-capitalize'>Buy now</Button>
                                <Button style={{fontSize:'12px'}} className='border-2 rounded-5 fw-bold text-capitalize' variant="contained">Free trial</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid mt-5 mb-5 px-5">
            <Row>
                <Col md={12} lg={4}>
                    <div style={{background:'linear-gradient(to right,#e1ebfc,#8bb4f7)',height:'73vh',width:'28rem'}} className='py-4 px-3'>
                        <div style={{marginBottom:'7rem'}}>
                            <h2 style={{fontSize:'22px',color:'black'}}>Generative AI. This changes everything.</h2>
                            <h6 style={{fontWeight:'400',color:'black'}}>Now with Generative Fill and Generative Expand. Powered by Adobe Firefly.</h6>
                            <a href="#" className='page-links'>Get started</a>
                        </div>
                        <div className='w-100 d-flex justify-content-center pt-4 px-5'>
                            <img height={'auto'} width={'100%'} src="/images/img-1.png" alt="image-1" />
                        </div>
                    </div>
                </Col>
                <Col md={12} lg={4}>
                    <div style={{background:'linear-gradient(to bottom right,#0222c4,#ed05ed)',height:'73vh',width:'28rem'}} className='py-4 px-3 text-white'>
                        <div style={{marginBottom:'7rem'}}>
                            <h2 style={{fontSize:'22px'}}>Adobe Express, powered by Firefly.</h2>
                            <h6 style={{fontWeight:'400'}}>Now with Text to Image or Text Effects, it’s easier than ever to make social posts, videos, flyers, and more.</h6>
                            <a href="#" className='page-links text-white'>Get Adobe Express Free</a>
                        </div>
                        <div className='w-100 d-flex justify-content-center pt-4 px-5'>
                            <img height={'auto'} width={'100%'} src="/images/img-2.png" alt="image-2" />
                        </div>
                    </div>     
                </Col>
                <Col md={12} lg={4}>
                <div style={{background:'#b78cde',height:'73vh',width:'28rem'}} className='py-4 px-3 text-white'>
                        <div className='d-flex flex-column p-4'>
                            <h6 style={{fontSize:'16px'}} className='text-black'>Explore our creative apps</h6>
                            <div style={{height:'1px'}} className='bg-black my-3'></div>
                            <a href="#" className='page-links pb-3'>Creative Cloud All Apps free trial</a>
                            <a href="#" className='page-links pb-3'>See plans and pricing</a>
                            <h6 style={{fontSize:'16px'}} className='mt-4 text-black'>Explore our creative apps</h6>
                            <div style={{height:'1px'}} className='bg-black my-3'></div>
                            <div className='d-flex flex-column'>
                                <a href="#" className='page-links pb-3'>Creative Cloud All Apps free trial</a>
                                <a href="#" className='page-links pb-3'>Graphic design</a>
                                <a href="#" className='page-links pb-3'>Video</a>
                                <a href="#" className='page-links pb-3'>Illustration</a>
                                <a href="#" className='page-links pb-3'>UI and UX</a>
                                <a href="#" className='page-links pb-3'>3D and AR</a>
                                <a href="#" className='page-links pb-3'>Social media</a>
                            </div>
                        </div>
                       
                    </div>  
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col md={12} lg={8}>
                <div style={{background:'#f08e0e',height:'73vh',width:'58rem'}} className='pt-5 px-4'>
                        <div>
                            <h2 style={{fontSize:'15px',color:'black',fontWeight:'600'}} className='mb-3'>ADOBE ILLUSTRATOR</h2>
                            <h2 style={{fontSize:'22px',color:'black'}}>Recolor your world.</h2>
                            <h6 style={{fontWeight:'400',color:'black'}}>Unlock endless color combinations with simple text prompts and Generative Recolor. Powered by Adobe Firefly.</h6>
                            <a href="#" className='page-links'> Learn more </a>
                        </div>
                        <div className='w-100 d-flex justify-content-center px-5'>
                            <img height={'auto'} width={'100%'} src="/images/img-3.png" alt="image-3" />
                        </div>
                    </div>
                </Col>
                <Col md={12} lg={4}>
                <div style={{background:'linear-gradient(to bottom left,#2af73e,#cc71e3)',height:'73vh',width:'28rem'}} className='py-4 px-3'>
                        <div style={{marginBottom:'7rem'}}>
                            <h2 style={{fontSize:'22px',color:'black'}}>Do it all with Creative Cloud.</h2>
                            <h6 style={{fontWeight:'400',color:'black'}}>Create faster, edit anywhere, and work better together — even when you’re apart.</h6>
                            <a href="#" className='page-links'>Explore Creative Cloud</a>
                        </div>
                        <div className='w-100 d-flex justify-content-center pt-4 px-5'>
                            <img height={'auto'} width={'100%'} src="/images/img-4.png" alt="image-4" />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

        <div className='mid-banner d-flex align-items-center'>
            <div style={{width:'400px', marginLeft:'8rem'}}>
                <h2 className='mb-3' style={{color:'black'}}>Work smarter with Adobe Acrobat Sign.</h2>
                <p style={{color:'black'}}>Collect signatures and sign documents faster than ever, so you can spend more time doing what you do best.</p>
                <Button style={{fontSize:'12px'}} className='text-white border-2 rounded-5 fw-bold text-capitalize me-3' variant="contained">See All Plans</Button>
                <a href="#" className='page-links'> Learn more </a>
            </div>
        </div>

        <div className="container-fluid mt-5 mb-5 px-5">
            <Row>
                <Col md={12} lg={4}>
                    <div style={{background:'linear-gradient(to bottom,#fab1b1,#fc0828)',height:'73vh',width:'28rem'}} className='py-4 px-3'>
                        <div style={{marginBottom:'7rem'}}>
                            <h2 style={{fontSize:'15px',color:'black',fontWeight:'600'}} className='mb-3'>ADOBE ACROBAT READER MOBILE APP</h2>
                            <h2 style={{fontSize:'22px',color:'black'}}>Work now works wherever.</h2>
                            <h6 style={{fontWeight:'400',color:'black'}}>With the Acrobat Reader mobile app, your smartphone is now a serious business tool.</h6>
                            <a href="#" className='page-links'>Learn more</a>
                        </div>
                        <div className='w-100 d-flex justify-content-center pt-4 px-5'>
                            <img height={'auto'} width={'100%'} src="/images/img-5.png" alt="image-1" />
                        </div>
                    </div>
                </Col>
                <Col md={12} lg={4}>
                    <div style={{background:'#ed0000',height:'73vh',width:'28rem'}} className='py-4 px-3 text-white'>
                        <div style={{marginBottom:'7rem'}}>
                            <h2 style={{fontSize:'22px'}}>Adobe Express, powered by Firefly.</h2>
                            <h6 style={{fontWeight:'400'}}>Now with Text to Image or Text Effects, it’s easier than ever to make social posts, videos, flyers, and more.</h6>
                            <a href="#" className='page-links text-white'>Get Adobe Express Free</a>
                        </div>
                        <div className='w-100 d-flex justify-content-center pt-4 px-5'>
                            <img height={'auto'} width={'100%'} src="/images/img-6.png" alt="image-2" />
                        </div>
                    </div>     
                </Col>
                <Col md={12} lg={4}>
                <div style={{background:'#470854',height:'73vh',width:'28rem'}} className='py-4 px-3 text-white'>
                        <div className='d-flex flex-column p-4'>
                            <h6 style={{fontSize:'16px'}} className='text-white'>Explore Acrobat</h6>
                            <div style={{height:'1px'}} className='bg-white my-3'></div>
                            <a href="#" className='page-links pb-3 text-white'>Creative Cloud All Apps free trial</a>
                            <a href="#" className='page-links pb-3 text-white'>See plans and pricing</a>
                            <h6 style={{fontSize:'16px'}} className='mt-4 text-black text-white'>Try our online PDF tools</h6>
                            <div style={{height:'1px'}} className='bg-white my-3'></div>
                            <div className='d-flex flex-column'>
                                <a href="#" className='page-links pb-3 text-white'>Word to PDF</a>
                                <a href="#" className='page-links pb-3 text-white'>PowerPoint to PDF</a>
                                <a href="#" className='page-links pb-3 text-white'>Excel to PDF</a>
                                <a href="#" className='page-links pb-3 text-white'>JPG to PDF</a>
                                <a href="#" className='page-links pb-3 text-white'>Compress PDF</a>
                                <a href="#" className='page-links pb-3 text-white'>Fill and Sign</a>
                            </div>
                        </div>
                    </div>  
                </Col>
            </Row>
            <Row className='mt-5 mb-5'>
                <Col md={12} lg={4}>
                    <div style={{background:'linear-gradient(to bottom left,#04bdb0,#f2fffe)',height:'73vh',width:'28rem'}} className='py-4 px-3'>
                        <div style={{marginBottom:'7rem'}}>
                            <h2 style={{fontSize:'15px',color:'black',fontWeight:'600'}} className='mb-3'>ADOBE ACROBAT READER MOBILE APP</h2>
                            <h2 style={{fontSize:'22px',color:'black'}}>A crystal ball for product teams.</h2>
                            <h6 style={{fontWeight:'400',color:'black'}}>Finally, product teams can get insights to build customer experiences that are clearly better.</h6>
                            <a href="#" className='page-links'>Learn more</a>
                        </div>
                        <div className='w-100 d-flex justify-content-center pt-4 px-5'>
                            <img height={'auto'} width={'100%'} src="/images/img-7.png" alt="image-1" />
                        </div>
                    </div>
                </Col>
                <Col md={12} lg={4}>
                    <div style={{background:'black',height:'73vh',width:'28rem'}} className='py-4 px-3 text-white'>
                        <div style={{marginBottom:'7rem'}}>
                        <h2 style={{fontSize:'15px',color:'white',fontWeight:'600'}} className='mb-3'>ADOBE 2023 DIGITAL TRENDS</h2>
                            <h2 style={{fontSize:'22px'}}>Today’s trends in focus.</h2>
                            <h6 style={{fontWeight:'400'}}>See how brands that embrace creativity pull ahead in the digital economy.</h6>
                            <a href="#" className='page-links text-white'>Get Adobe Express Free</a>
                        </div>
                        <div className='w-100 d-flex justify-content-center pt-4 px-5'>
                            <img height={'auto'} width={'100%'} src="/images/img-6.png" alt="image-2" />
                        </div>
                    </div>     
                </Col>
                <Col md={12} lg={4}>
                <div style={{background:'#02ccbc',height:'73vh',width:'28rem'}} className='py-4 px-3 text-white'>
                        <div className='d-flex flex-column p-4'>
                            <h6 style={{fontSize:'16px'}} className='text-black'>Explore business solutions</h6>
                            <div style={{height:'1px'}} className='bg-black my-3'></div>
                            <div className='d-flex flex-column'>
                                <a href="#" className='page-links pb-3'>Data insights and audiences</a>
                                <a href="#" className='page-links pb-3'>Experience management platform</a>
                                <a href="#" className='page-links pb-3'>Content management</a>
                                <a href="#" className='page-links pb-3'>Commerce</a>
                                <a href="#" className='page-links pb-3'>Customer journeys</a>
                                <a href="#" className='page-links pb-3'>B2B marketing</a>
                                <a href="#" className='page-links pb-3'>Digital enrollment and onboarding</a>
                                <a href="#" className='page-links pb-3'>Marketing workflow</a>
                                <a href="#" className='page-links pb-3'>View all products</a>
                            </div>
                        </div>
                       
                    </div>  
                </Col>
            </Row>
        </div>
        
    </>
  )
}

export default LandingPage