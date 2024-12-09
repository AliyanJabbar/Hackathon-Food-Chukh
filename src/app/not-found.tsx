import Button from '@/components/microComponents/button'
import PageHeader from '@/components/page-header'
 
export default function NotFound() {
  return (
    <main>
      <PageHeader heading='404 Error' title='404'/>
      <div className='text-center mx-auto my-20'>
        <h1 className='text-[96px] font-semibold text-orangeLike font-sans'>404</h1>
        <h2 className='text-[32px] font-bold text-txtBlack'>Oops! Look likes something going wrong</h2>
        <p className='text-txtGray w-[500px] mx-auto font text-[18px] my-5'>Page Cannot be found! we’ll have it figured out in no time. Meanwhile, check out these fresh ideas;</p>
        <Button text='Go to home' link='/'/>
      </div>
    </main>
  )
}