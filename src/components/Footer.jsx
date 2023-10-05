import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer p-5">
        <div className='d-flex justify-content-around align-content-center flex-wrap'>
            <div>
                <h6 style={{fontSize:'14px'}}>Shop for</h6>
                <ul style={{padding:'0px'}}>
                    <li><a href='#' className='footer-links'>Creative Cloud</a></li>
                    <li><a href='#' className='footer-links'>Photoshop</a></li>
                    <li><a href='#' className='footer-links'>Adobe Express</a></li>
                    <li><a href='#' className='footer-links'>Photography</a></li>
                    <li><a href='#' className='footer-links'>Premiere Pro</a></li>
                    <li><a href='#' className='footer-links'>Adobe Stock</a></li>
                    <li><a href='#' className='footer-links'>Elements Family</a></li>
                </ul>

                <ul style={{padding:'0px'}} className='mt-4'>
                    <li><a href='#' className='footer-links'>Document Cloud</a></li>
                    <li><a href='#' className='footer-links'>Acrobat</a></li>
                    <li><a href='#' className='footer-links'>Acrobat Sign</a></li>
                </ul>

                <ul style={{padding:'0px'}} className='mt-4'>
                    <li><a href='#' className='footer-links'>Special offers</a></li>
                    <li><a href='#' className='footer-links'>View plans and pricing</a></li>
                    <li><a href='#' className='footer-links'>View all products</a></li>
                </ul>

            </div>
            <div>
                <h6 style={{fontSize:'14px'}}>For business</h6>
                <ul style={{padding:'0px'}}>
                    <li><a href='#' className='footer-links'>Creative Cloud for business</a></li>
                    <li><a href='#' className='footer-links'>Creative Cloud for enterprise</a></li>
                    <li><a href='#' className='footer-links'>Acrobat for business</a></li>
                </ul>
                <h6 style={{fontSize:'14px'}} className='mt-4'>For education</h6>
                <ul style={{padding:'0px'}}>
                    <li><a href='#' className='footer-links'>Discounts for students and teachers</a></li>
                    <li><a href='#' className='footer-links'>Schools and universities</a></li>
                    <li><a href='#' className='footer-links'>Digital Learning Solutions</a></li>
                </ul>
                <h6 style={{fontSize:'14px'}} className='mt-4'>For mobile</h6>
                <ul style={{padding:'0px'}}>
                    <li><a href='#' className='footer-links'>Apps for iOS</a></li>
                    <li><a href='#' className='footer-links'>Apps for Android</a></li>
                </ul>
            </div>
            <div>
            <h6 style={{fontSize:'14px'}}>Experience Cloud</h6>
                <ul style={{padding:'0px'}}>
                    <li><a href='#' className='footer-links'>What is Experience Cloud?</a></li>
                    <li><a href='#' className='footer-links'>Analytics</a></li>
                    <li><a href='#' className='footer-links'>Experience Manager</a></li>
                    <li><a href='#' className='footer-links'>Commerce</a></li>
                    <li><a href='#' className='footer-links'>Marketo Engage</a></li>
                    <li><a href='#' className='footer-links'>Workfront</a></li>
                    <li><a href='#' className='footer-links'>Terms of Use</a></li>
                </ul>
            </div>
            <div>
            <h6 style={{fontSize:'14px'}}>Support</h6>
                <ul style={{padding:'0px'}}>
                    <li><a href='#' className='footer-links'>Download and install</a></li>
                    <li><a href='#' className='footer-links'>Help Center</a></li>
                    <li><a href='#' className='footer-links'>Adobe Support Community</a></li>
                    <li><a href='#' className='footer-links'>Enterprise Support</a></li>
                    <li><a href='#' className='footer-links'>Genuine software</a></li>
                </ul>

                <h6 style={{fontSize:'14px'}} className='mt-4'>Resources</h6>
                <ul style={{padding:'0px'}}>
                    <li><a href='#' className='footer-links'>Adobe Blog</a></li>
                    <li><a href='#' className='footer-links'>Adobe Developer</a></li>
                </ul>

                <h6 style={{fontSize:'14px'}} className='mt-4'>Adobe Account</h6>
                <ul style={{padding:'0px'}}>
                    <li><a href='#' className='footer-links'>Log in to your account</a></li>
                </ul>
            </div>
            <div>
            <h6 style={{fontSize:'14px'}}>Adobe</h6>
                <ul style={{padding:'0px'}}>
                    <li><a href='#' className='footer-links'>About</a></li>
                    <li><a href='#' className='footer-links'>Careers</a></li>
                    <li><a href='#' className='footer-links'>Newsroom</a></li>
                    <li><a href='#' className='footer-links'>Corporate responsibility</a></li>
                    <li><a href='#' className='footer-links'>Investor Relations</a></li>
                    <li><a href='#' className='footer-links'>Supply chain</a></li>
                    <li><a href='#' className='footer-links'>Events</a></li>
                    <li><a href='#' className='footer-links'>Diversity and inclusion</a></li>
                    <li><a href='#' className='footer-links'>Integrity</a></li>
                </ul>
            </div>
        </div>

        <div className='px-5'>
          <div className='line-divider'></div>
            <div className='d-flex justify-content-center align-items-center py-2'>
              <span style={{fontWeight:'700',fontSize:'14px'}} className='d-flex justify-content-center align-items-center me-5'>Feature Products</span>
              <div className='d-flex justify-content-center align-items-center'>
                <img height={'20px'} width={'20px'} src="/reader_appicon_64_grayscale.png" alt="" />
                <span className='ms-2 me-4 fp-text'>Adobe Acrobat Reader</span>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <img height={'20px'} width={'20px'} src="/Adobe_Express_FP_Icon.png" alt="" />
                <span className='ms-2 me-4 fp-text'>Adobe Express</span>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <img height={'20px'} width={'20px'} src="/ps_appicon_64_grayscale.png" alt="" />
                <span className='ms-2 me-4 fp-text'>Photoshop</span>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <img height={'20px'} width={'20px'} src="/ai_appicon_64_grayscale.png" alt="" />
                <span className='ms-2 me-4 fp-text'>Illustrator</span>
              </div>
            </div>

            <div className='line-divider'></div>

            <div className='d-flex align-items-center justify-content-between pt-5 flex-wrap'>
              <div style={{color:'grey'}} className='d-flex justify-content-between align-content-center w-25'>
                <div className='d-flex align-items-center'>
                  <i class="fa-solid fa-globe me-2 fs-5"></i>
                  <span style={{fontSize:'12px'}}>Change Region<i class="fa-solid fa-chevron-down ms-2"></i></span>
                </div>
                <div className='d-flex align-items-center'>
                  <i class="fa-brands fa-square-facebook me-3 fs-4"></i>
                  <i class="fa-brands fa-square-twitter me-3 fs-4"></i>
                  <i class="fa-brands fa-linkedin me-3 fs-4"></i>
                  <i class="fa-brands fa-square-instagram me-3 fs-4"></i>
                </div>
              </div>
              <div>
                 <span style={{fontSize:'10px'}}>Copyright © 2023 Adobe. All rights reserved. / Privacy / Terms of Use / Cookie preferences / Do not sell or share my personal information / AdChoices</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer