import React, { useState } from 'react';
import { Sidebar } from '@bee2pay/ui-components';
import {
  AgreementIcon,
  CredentialsIcon,
  FaqIcon,
  PaymentsConditions,
  PaymentsRulesIcon,
  PendenciesIcon,
  ReservationsIcon,
  SchedulesIcon,
  TermsOfAdhesionIcon,
  TransactionsIcon,
} from '@bee2pay/icons';
import '../../node_modules/@bee2pay/ui-components/dist/tailwind.css';

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  return (
    <div style={{ display: 'flex' }}>
      <aside>
        <Sidebar
          isFullScreen
          menuItems={[
            {
              idCategory: 'management',
              category: 'GESTÃO',
              showCategory: true,
              items: [
                {
                  icon: <ReservationsIcon />,
                  id: 'hotelReservations',
                  label: 'Reservas',
                  showMenu: true,
                  onClick: () => {
                    window.location.href = '/safe';
                  },
                },
                {
                  icon: <PendenciesIcon />,
                  id: 'pendencies',
                  label: 'Pendências',
                  showMenu: true,
                  onClick: () => {
                    console.log('');
                  },
                },
              ],
            },
            {
              idCategory: 'visual-account',
              category: 'conta gráfica',
              showCategory: true,
              items: [
                {
                  id: 'transactions',
                  label: 'Histórico de Transações',
                  showMenu: true,
                  onClick: () => {
                    window.location.href = '/sub';
                  },
                  icon: <TransactionsIcon />,
                },
                {
                  id: 'receivables',
                  label: 'Recebíveis',
                  showMenu: true,
                  onClick: () => {
                    console.log('');
                  },
                  icon: <SchedulesIcon />,
                },
              ],
            },
            {
              idCategory: 'config',
              category: 'Configuração',
              showCategory: true,
              items: [
                {
                  icon: <CredentialsIcon />,
                  id: 'credentials',
                  label: 'Credenciais',
                  showMenu: true,
                  onClick: () => console.log(''),
                },
                {
                  icon: <AgreementIcon />,
                  id: 'rules',
                  label: 'Acordos',
                  showMenu: true,
                  onClick: () => console.log(''),
                },
                {
                  icon: <TermsOfAdhesionIcon />,
                  id: 'terms',
                  label: 'Termos de Adesão',
                  showMenu: true,
                  onClick: () => console.log(''),
                },
                {
                  icon: <PaymentsRulesIcon />,
                  id: 'paymentConfigurations',
                  label: 'Regras de Pagamento',
                  showMenu: true,
                  onClick: () => console.log(''),
                },
                {
                  icon: <PaymentsConditions />,
                  id: 'paymentConditions',
                  label: 'Condições de Recebimento',
                  showMenu: true,
                  onClick: () => console.log(''),
                },
              ],
            },
          ]}
          bottomMenuItems={[
            {
              items: [
                {
                  icon: <FaqIcon />,
                  id: 'manegerFrequentlyAskedQuestions',
                  label: "Gerenciar FAQ's",
                  onClick: () => {
                    console.log('');
                  },
                  showMenu: true,
                },
                {
                  icon: <FaqIcon />,
                  id: 'frequentlyAskedQuestions',
                  label: 'Perguntas Frequentes - FAQ',
                  onClick: () => {
                    console.log('');
                  },
                  showMenu: true,
                },
              ],
            },
          ]}
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
          menuSelected="hotelReservations"
        />
      </aside>
      {/* <main style={{ width: '100%' }}>
        <header>header</header>
        <section>
          <p>sessoes</p>
        </section>
      </main> */}
    </div>
  );
}
