import React from 'react';

const Collection = () => {
  return (
    <section className='section-collection'>
      <div className='container'>
        <ul className='list-group row'>
          <li className='list-item col-12 col-xl-6'>
            <div className='card collection-card'>
              <img
                className='card-image'
                src='./images/collection_image_1.png'
                alt='collection_image_1'
              />
              <div className='card-info'>
                <h4 className='card-title'>New arrivals are now in!</h4>
                <button className='btn btn-secondary'>SHOW COLLECTION</button>
              </div>
            </div>
          </li>
          <li className='list-item col-6 col-xl-3'>
            <div className='card collection-card'>
              <img
                className='card-image'
                src='./images/collection_image_2.png'
                alt='collection_image_2'
              />
              <div className='card-info'>
                <h4 className='card-title'>Basic t-shirts $29,99</h4>
                <button className='btn'>MORE DETAILS</button>
              </div>
            </div>
          </li>
          <li className='list-item col-6 col-xl-3'>
            <div className='card collection-card'>
              <img
                className='card-image'
                src='./images/collection_image_3.png'
                alt='collection_image_3'
              />
              <p className='badge badge-danger'>50%</p>
              <div className='card-info'>
                <h4 className='card-title'>Sale this summer</h4>
                <button className='btn btn-secondary'>VIEW ALL</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Collection;
