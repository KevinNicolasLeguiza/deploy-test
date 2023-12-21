import { ProductCard } from '@/components'

export function Workspace() {
  return <div className='container'>
    <div className="row">
      <div className="col-6">
        <ProductCard />
      </div>
      <div className="col-6">
        <ProductCard />
      </div>
    </div>
    <div className='row'>
      <div className="col-6">
        <ProductCard />
      </div>
      <div className="col-6">
        <ProductCard />
      </div>
    </div>
  </div>
}