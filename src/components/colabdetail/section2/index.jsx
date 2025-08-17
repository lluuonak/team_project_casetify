import { Section2Style } from './style';

const Section2 = ({ pageData, categoryName }) => {
   const extractProductData = () => {
       if (!pageData?.length) return [];
       
       return pageData.flatMap((section, sectionIndex) =>
           section.data.map((item, itemIndex) => ({
               id: `${sectionIndex}-${itemIndex}`,
               title: item.title,
               img: item.img
           }))
       );
   };

   const products = extractProductData();
   const firstTitle = pageData?.[0]?.data?.[0]?.title || '';


   return (
       <Section2Style>
           <div className="product-inner">
               <div className="line"></div>
               <span>
                   Co-Lab &gt; {categoryName?.toUpperCase()} &gt; PRODUCTS
               </span>
               {firstTitle ? <h3>{firstTitle}</h3> : <h3>Loading...</h3>}
               <ul className="category-list">
                   <li>
                       <span>타입</span>
                       <ul className="cate type">
                           <li>Apple</li>
                           <li>Samsung</li>
                           <li>ACC</li>
                       </ul>
                   </li>
                   <li>
                       <span>시리즈</span>
                       <ul className="cate series">
                           <li>바운스</li>
                           <li>임팩트</li>
                           <li>링</li>
                           <li>미러</li>
                           <li>BioVeg & 페블 레더</li>
                       </ul>
                   </li>
               </ul>
               <ul className="product-list">
                   {products.map(({ id, title, img }) => (
                       <li key={id}>
                           <div className="img-bg">
                               <img src={img} alt={title} />
                           </div>
                           <div className="info">
                               <span>{title}</span>
                           </div>
                       </li>
                   ))}
               </ul>
               <span className="view-more">VIEW MORE</span> 
           </div>
       </Section2Style>
   );
};

export default Section2;