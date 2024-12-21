import CheckoutPage from '@/components/checkout/checkout1'
import PageHeader from '@/components/page-header'
import React from 'react'

const Checkout = () => {
  return (
    <div>
        <PageHeader heading='Checkout Page' title='Checkout'/>
      <CheckoutPage/>
    </div>
  )
}

export default Checkout
