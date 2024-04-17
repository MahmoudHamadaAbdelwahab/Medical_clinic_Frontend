import React from 'react'
import { Container } from 'react-bootstrap'
import scan from "../../img/services/scan_2992104.png"
import ray from "../../img/services/ray_11505441.png"
import spinalColumn from "../../img/services/spinal-column_2563692.png"
import teeth from "../../img/services/teeth.png"
export default function Service() {
  return (
    <div className='service'>
            <div className='textCart'>
              <h4>Service</h4>
            </div>
        <Container>
            <div className='d-flex justify-content-center gap-2 text-center my-5'>
                <div className='cartIcon'>
                    <img decoding="async" src={teeth} alt=""/>
                    <div class="pull-left vc_col-md-12 shop_feature_description_v3">
                        <h3 class="shop_feature_heading_v3"><a href="https://clinika.modeltheme.com/service/teeth-whitening/">Teeth Whitening</a></h3>
                        <p class="shop_feature_subheading_v3">Capitalize on low hanging fruit to identify a ...</p>
                    </div>
                </div>
                <div className='cartIcon'>
                    <img decoding="async" src={spinalColumn} alt=""/>
                    <div class="pull-left vc_col-md-12 shop_feature_description_v3">
                        <h3 class="shop_feature_heading_v3"><a href="">Spinal Surgery</a></h3>
                        <p class="shop_feature_subheading_v3">Capitalize on low hanging fruit to identify a...</p>
                    </div>
                </div>
                <div className='cartIcon'>
                    <img decoding="async" src={ray} alt=""/>
                    <div class="pull-left vc_col-md-12 shop_feature_description_v3">
                        <h3 class="shop_feature_heading_v3"><a href="">X-Ray Imagery</a></h3>
                        <p class="shop_feature_subheading_v3">Leverage agile frameworks to provide a robust synopsis  ...</p>
                    </div>
                </div>
                <div className='cartIcon'>
                    <img decoding="async" src={scan}/>
                    <div class="pull-left vc_col-md-12 shop_feature_description_v3">
                        <h3 class="shop_feature_heading_v3"><a href="">MRI Check-up</a></h3>
                        <p class="shop_feature_subheading_v3">Capitalize on low hanging fruit to identify a ...</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
