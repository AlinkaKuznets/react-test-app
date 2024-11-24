import React from 'react';

export default function MobileMenu({ isOpen = false }) {
   return (
      <React.Fragment>
         <div
            className={`mobile-menu min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}
         >
            <nav className="space-y-5 text-lg">
               <ul className="text-l space-y-8">
                  <li>
                     <a href="#">Агенство</a>
                  </li>
                  <li>
                     <a href="#">Услуги</a>
                  </li>
                  <li>
                     <a href="#">Кейсы</a>
                  </li>
                  <li>
                     <a href="#">Блог</a>
                  </li>
                  <li>
                     <a href="#">Контакты</a>
                  </li>
               </ul>
               <div className="nav-contacts text-l">
                  <hr />
                  <div className="contacts space-y-8">
                     <p className=""> Контакты:</p>
                     <ul className="space-y-8">
                        <li>+7 999 123 45 67</li>
                        <li>hello@cyberia.studio</li>
                        <li>ул.Ярных, д.35, оф.10</li>
                     </ul>
                  </div>
                  <hr />
               </div>
            </nav>
         </div>
      </React.Fragment>
   );
}
