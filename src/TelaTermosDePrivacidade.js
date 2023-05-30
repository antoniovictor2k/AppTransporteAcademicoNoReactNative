import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { Dialog, Portal, Provider, Button } from 'react-native-paper';
import styles from '../Styles/StyleTelaTermosDeUso';

function TelaTermosDePrivacidade({navigation}) {
  const [visible, setVisible] = useState(false);

  // const ativarTermosDeUso = () => visible === false ? setVisible(true) : setVisible(false);
    return (
      <View  style={styles.container}>
      <View style={styles.buttonFechar} >
        
          <Button
          icon={'arrow-left'}
          onPress={() => navigation.navigate('Cadastro')}
          buttonColor='#000'
          textColor='#fff'
          />
            
      </View>
      <Text style={styles.titulo}>

      Política de Privacidade

      </Text>
            <ScrollView>

              <Text style={styles.heading}>Política de Privacidade</Text>
              <Text style={styles.paragraph}>
                A sua privacidade é importante para nós. É política do respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no app Transporte Acadâmico, e outros apps que possuímos e operamos.
              </Text>
              <Text style={styles.paragraph}>
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
              </Text>
              <Text style={styles.paragraph}>
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </Text>
              <Text style={styles.paragraph}>
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
              </Text>
              <Text style={styles.paragraph}>
                O nosso app pode ter links para apps externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses apps e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
              </Text>
              <Text style={styles.paragraph}>
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
              </Text>
              <Text style={styles.paragraph}>
                O uso continuado de nosso app será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
              </Text>
              <Text style={styles.paragraph}>
                - O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
              </Text>
              <Text style={styles.paragraph}>
                - Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade</Text>

              <Text style={styles.paragraph}>- Utilizamos anúncios para compensar os custos de funcionamento deste app e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este app foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</Text>
              <Text style={styles.paragraph}>- Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o app através de um dos apps de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.</Text>


              <Text style={styles.heading}>Compromisso do Usuário</Text>
              <Text style={styles.paragraph}>
                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o oferece no app e com caráter enunciativo, mas não limitativo:
              </Text>
              <Text style={styles.listItem}>
                A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
              </Text>
              <Text style={styles.listItem}>
                B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, <Text style={styles.link}>betano apostas</Text> ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
              </Text>
              <Text style={styles.listItem}>
                C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do , de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
              </Text>
              <Text style={styles.heading}>Mais informações</Text>
              <Text style={styles.paragraph}>
                Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso app.
              </Text>
              <Text style={styles.paragraph}>
                Esta política é efetiva a partir de 10 March 2023 02:25
              </Text>
              <Text style={styles.developer}>Developer by JEVA System - 2023</Text>
            </ScrollView>
          </View>
    );
}

export default TelaTermosDePrivacidade;
