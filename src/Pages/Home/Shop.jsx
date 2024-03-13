import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Headline from '../../Components/Headline'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import Products from '../../Components/Products'
import { FaAngleRight } from "react-icons/fa6"

const Shop = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
      fetch('https://dummyjson.com/products?limit=12')
          .then(response => response.json())
          .then(data => setProduct(data.products))
  }, [])
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Container>
        <Headline className='pt-[124px]' title='Products'></Headline>
        <p className='flex items-center gap-x-2 font-dm text-[12px] text-secondary'><span>Home</span> <FaAngleRight /> <span>Products</span></p>
        <div className='flex pt-[130px]'>
          <div>
            <h1 className='font-bold font-dm text-xl text-primary pb-9'>Shop by Category</h1>
            <div className='flex items-center justify-between border-b pb-5'>
              <p className='font-dm text-base text-secondary'>Category 1</p>

              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.78571 3.92857H6.57143V0.714286C6.57143 0.319866 6.25156 0 5.85714 0H5.14286C4.74844 0 4.42857 0.319866 4.42857 0.714286V3.92857H1.21429C0.819866 3.92857 0.5 4.24844 0.5 4.64286V5.35714C0.5 5.75156 0.819866 6.07143 1.21429 6.07143H4.42857V9.28571C4.42857 9.68013 4.74844 10 5.14286 10H5.85714C6.25156 10 6.57143 9.68013 6.57143 9.28571V6.07143H9.78571C10.1801 6.07143 10.5 5.75156 10.5 5.35714V4.64286C10.5 4.24844 10.1801 3.92857 9.78571 3.92857Z" fill="#767676" />
              </svg>


            </div>
            <div className='flex items-center justify-between border-b py-5'>
              <p className='font-dm text-base text-secondary'>Category 2</p>

              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.78571 3.92857H6.57143V0.714286C6.57143 0.319866 6.25156 0 5.85714 0H5.14286C4.74844 0 4.42857 0.319866 4.42857 0.714286V3.92857H1.21429C0.819866 3.92857 0.5 4.24844 0.5 4.64286V5.35714C0.5 5.75156 0.819866 6.07143 1.21429 6.07143H4.42857V9.28571C4.42857 9.68013 4.74844 10 5.14286 10H5.85714C6.25156 10 6.57143 9.68013 6.57143 9.28571V6.07143H9.78571C10.1801 6.07143 10.5 5.75156 10.5 5.35714V4.64286C10.5 4.24844 10.1801 3.92857 9.78571 3.92857Z" fill="#767676" />
              </svg>


            </div>
            <div className='flex items-center justify-between border-b py-5'>
              <p className='font-dm text-base text-secondary'>Category 3</p>

              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.78571 3.92857H6.57143V0.714286C6.57143 0.319866 6.25156 0 5.85714 0H5.14286C4.74844 0 4.42857 0.319866 4.42857 0.714286V3.92857H1.21429C0.819866 3.92857 0.5 4.24844 0.5 4.64286V5.35714C0.5 5.75156 0.819866 6.07143 1.21429 6.07143H4.42857V9.28571C4.42857 9.68013 4.74844 10 5.14286 10H5.85714C6.25156 10 6.57143 9.68013 6.57143 9.28571V6.07143H9.78571C10.1801 6.07143 10.5 5.75156 10.5 5.35714V4.64286C10.5 4.24844 10.1801 3.92857 9.78571 3.92857Z" fill="#767676" />
              </svg>


            </div>
            <div className='flex items-center justify-between border-b py-5'>
              <p className='font-dm text-base text-secondary'>Category 4</p>

              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.78571 3.92857H6.57143V0.714286C6.57143 0.319866 6.25156 0 5.85714 0H5.14286C4.74844 0 4.42857 0.319866 4.42857 0.714286V3.92857H1.21429C0.819866 3.92857 0.5 4.24844 0.5 4.64286V5.35714C0.5 5.75156 0.819866 6.07143 1.21429 6.07143H4.42857V9.28571C4.42857 9.68013 4.74844 10 5.14286 10H5.85714C6.25156 10 6.57143 9.68013 6.57143 9.28571V6.07143H9.78571C10.1801 6.07143 10.5 5.75156 10.5 5.35714V4.64286C10.5 4.24844 10.1801 3.92857 9.78571 3.92857Z" fill="#767676" />
              </svg>


            </div>
            <div className='flex items-center justify-between border-b py-5'>
              <p className='font-dm text-base text-secondary'>Category 5</p>

              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.78571 3.92857H6.57143V0.714286C6.57143 0.319866 6.25156 0 5.85714 0H5.14286C4.74844 0 4.42857 0.319866 4.42857 0.714286V3.92857H1.21429C0.819866 3.92857 0.5 4.24844 0.5 4.64286V5.35714C0.5 5.75156 0.819866 6.07143 1.21429 6.07143H4.42857V9.28571C4.42857 9.68013 4.74844 10 5.14286 10H5.85714C6.25156 10 6.57143 9.68013 6.57143 9.28571V6.07143H9.78571C10.1801 6.07143 10.5 5.75156 10.5 5.35714V4.64286C10.5 4.24844 10.1801 3.92857 9.78571 3.92857Z" fill="#767676" />
              </svg>


            </div>
          </div>

          <div className='pl-10 pt-[25px]'>
            <div className='flex items-center gap-x-10'>
              <div className='flex items-center'>
                <div className='mr-[14px]'>
                  <p className='font-dm text-base text-secondary'>Sort by:</p>
                </div>
                <div className='flex border-2'>
                  <div className='mr-[120px] mx-[21px] my-[3px]'>
                    <p className='font-dm text-base text-secondary'>Featured</p>
                  </div>
                  <button className='mx-[21px] my-[12px]'>

                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.720972 0H9.85588C10.4878 0 10.8038 0.763314 10.3565 1.21065L5.79079 5.77988C5.51387 6.0568 5.06298 6.0568 4.78606 5.77988L0.22038 1.21065C-0.226957 0.763314 0.0890194 0 0.720972 0Z" fill="#737373" />
                    </svg>

                  </button>
                </div>
              </div>
              <div className='flex items-center'>
                <div className='mr-[14px]'>
                  <p className='font-dm text-base text-secondary'>Show:</p>
                </div>
                <div className='flex border-2'>
                  <div className='mr-[66px] mx-[21px] my-[3px]'>
                    <p className='font-dm text-base text-secondary'>36</p>
                  </div>
                  <button className='mx-[21px] my-[12px]'>

                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.720972 0H9.85588C10.4878 0 10.8038 0.763314 10.3565 1.21065L5.79079 5.77988C5.51387 6.0568 5.06298 6.0568 4.78606 5.77988L0.22038 1.21065C-0.226957 0.763314 0.0890194 0 0.720972 0Z" fill="#737373" />
                    </svg>

                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap gap-x-10 pt-[60px] pb-[50px]'>
              {
                product.map(productItem =>
                  <Products productItem={productItem}></Products>
                  )
              }
            </div>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Shop