import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonSearchbar
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

interface Dulce {
  nombre: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonSearchbar
  ],
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss']
})
export class ComprasPage {
  dulces: Dulce[] = [
    { nombre: 'Enrollados', precio: 0.10, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493036578_2442342849498232_4102661831470293851_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=cgJWTtin09wQ7kNvwEE0sJS&_nc_oc=AdkDOmQwXTWXNyCOGrncKMl835VjUfP6pzcmjcc1fFGPIspQB3eRj227alra4eGNeDg&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=qXvk4DqDdPPWupI3Qv_POQ&oh=00_AfOOclDdkrsGyrISloygoye_5PrfhxFm5nQiLvgbgt72VQ&oe=685CE929' },
    { nombre: 'Quesitos de manjar', precio: 0.15, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/492992282_2442342829498234_4390976137043982567_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=tcgKnfuX8wwQ7kNvwEMJ_Us&_nc_oc=Adnve8EW-0SNB60Z42sJ0F87KXuHkCA_uOs_ofVpSfTAoZ9X6VgLEE4L4OvFOeFmJXY&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=Du-C1y0Z8LNTIaGp-86OAg&oh=00_AfP7GKwP9V79U5eAGIUeHf8bxjUxVbei9RnX8gcK_cfY1A&oe=685CE359' },
    { nombre: 'Higos Enconfitados', precio: 0.35, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493760546_2442342626164921_1663066049614797522_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=Svt3i5WroukQ7kNvwGGYkh-&_nc_oc=AdmRvdwfBVBJR587K0JNn4QRwrNIdNHA9Exy01uuJ2l0AA-HpXSdpdbC6LYj6UxXQJg&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=m0b4TCktMGRU0ecTgzaidQ&oh=00_AfPa2SvEqBYu9Me7HeyHsTCW5fUteA5D6GgZPRv0AqZIQA&oe=685CBE52' },
    { nombre: 'Cortados de Guayaba', precio: 0.25, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493317727_2442342859498231_5711252003917673727_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=5Hy1PhGB8H0Q7kNvwHkYkGg&_nc_oc=AdnquYkDRvd2R-UNcArCU2_t-UP1GcS5hKwIzr5ilmdvvaw_mKWU5d8C5Enk2Bb8SjM&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=a7zLLWgS_7xwUm7VgBt9RQ&oh=00_AfNhiYbshjm84ViC9Go82OeFdrl40yreG0mWHwjJqSrjLg&oe=685CC043' },
    { nombre: 'Guayaba con Manjar', precio: 0.30, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/492493114_2442342716164912_6810699043526566195_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=5BLcawPlh08Q7kNvwEQKDgN&_nc_oc=AdnSQxwGbse6dVtsCN18s-PQd7NlOXcRqFt9bKGaq57OVp2xIDsOZ_1SfurQI7kh9jo&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=ppV4iryBJZ5l05fOHzmyNQ&oh=00_AfOeO4KeoZh0IDbJCHvTngyFMT78geoO-wpG74MOvyeN7A&oe=685CC6BA' },
    { nombre: 'Frutitas Naturales', precio: 0.25, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493808202_2442342526164931_156701465978955041_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=VeEBuI5QKtcQ7kNvwHr8irr&_nc_oc=AdmkHgA2eWIJmvrXP30AWSNLkwzoTTPxMPfF6RE9MVahDkOrTe73RJZph2FqfvY5zIQ&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=p5xTCMqJ6IdXDH8_ZzztsQ&oh=00_AfNo_93g7j9CPs503AjDXDLBaJeNTCMTblr4GTwxirHJ3w&oe=685CE135' },
    { nombre: 'Suspiros', precio: 0.5, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493208539_2442342819498235_1008894600594063813_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=KyLhDDSUTI8Q7kNvwFpAKA3&_nc_oc=AdlnVGFT0nPOu4yXPSanvCkEWr-vVest6o2DmjYUYOYwiZwv9N8HpJf7pJr7WtsSsXA&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=-Pg0nxsFdhtBOnhlzb8BnA&oh=00_AfNFd8wKx8Crz37N8Wbv4pt52Q6phIS9JXXshrMdt4lAfg&oe=685CE5F7' },
    { nombre: 'Cocadas de Panela', precio: 0.50, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/492829673_2442342822831568_2164653304636427493_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=jkzHzXOSF9MQ7kNvwEr4G8r&_nc_oc=AdmieOJ49-FXnLISDxxQT3kNYB3oCLgc0UmyQFW3NogVzO93IVHVS1oSWRXbZWFPj4s&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=amz1085UhtdI3Q88ZkoiFw&oh=00_AfMP_ZQ-NKlMBEWcLNuLLByQey0z9VzrEs5txV2nY1f2FA&oe=685CDED1' },
    { nombre: 'Frutitas de Manjar', precio: 0.15, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493941194_2442341669498350_7440904414456908780_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=C0ye3GGt5awQ7kNvwEQKKsZ&_nc_oc=AdmCQ_ND99-GiWbvMHsl0mw_0hlUNXMdskBUZcT7yONRVOSnCvfpqb1vi-w8M8uLSbU&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=BZA7mDAF7Y8-ZcRdVkLrrg&oh=00_AfMlugQOMLWLNsC0FFbl99ZotPCmZ8CKUGc_vGKTZqzVNA&oe=685CCE85' },
    { nombre: 'Cachitos de Manjar', precio: 0.15, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493322955_2442342519498265_6928196377388197406_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=Cenz4MgDKZsQ7kNvwGSv6pd&_nc_oc=AdlK0ZeY25v3D9-exp3OUWRHus1alNARzBoRfSYF3XY3pQdTDbs1JFgPVKB73MQMoj4&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=ziOGocb9n8NO44np-gPJ_w&oh=00_AfOCCFCnnTYkbt5HWUT1so12TTKTsf376yCwsw6joUKAZg&oe=685CD6C7' },
    { nombre: 'Aplanchados', precio: 0.15, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493882716_2442341612831689_1563955614557985170_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=oDW1sWqGDpoQ7kNvwEke5iK&_nc_oc=Adlh1SuMydAOC3vFs7tugOS8ZLlSOqsJMGYI5-qmZ4CF6zwE-Z5hRB2t_8Jx1eIbMTM&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=YYb-JM_6wczC0-ybDwi8gA&oh=00_AfML9SMA8JiLSptJ3SnwivkyXNu16BLpMxJazDC5V-wBEg&oe=685CE720' },
    { nombre: 'Cocada de Horno', precio: 0.25, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493279059_2442342529498264_1095209561872839711_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=so63Cm58VNoQ7kNvwFW8nga&_nc_oc=AdmZN_ekR60xhrsSEMVAfzubu1c1pdJH0hHHpBwUBblLIqtQcrHis4VwZOU5Z1c00t8&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=35ps4yWsWr3YvN2o_BwOBA&oh=00_AfOoK2Yk8aZHQswT8t4dzXqqgifPV60WrekCFtRszZTRIQ&oe=685CF13C' },
    { nombre: 'Huevitos de Faltriquera', precio: 0.25, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/494164001_2442342786164905_8910951248834725447_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=h3OaAPylDaQQ7kNvwGmK0Ez&_nc_oc=Adk7lN-2fT2fu_Tk0HWsdzPSU7aV0WDbX-0fmR8sOQzK6E2EAyFIXzG4bN4r55nctHY&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=AV8Pha8PVM-nv9L-NS5ljA&oh=00_AfOvzq2zfzH6z6PVG2kRfb31sWIDMx4p_k-zqcEK-Qumxg&oe=685CE578' },
    { nombre: 'Nogadas', precio: 0.25, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493736021_2442342629498254_1009729150715342105_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=tKm5TemvIHAQ7kNvwE593WL&_nc_oc=Adl7xpIdoLe30K9_x0EbvpiuI7PCQN_tGN_J6r_0ySLAiPsM5dNDD9TDWNjogWHjUJM&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=IeHZ965n2E5vPaT3FKxXVw&oh=00_AfNIi5hqJ1lMZKSYBBSKQjbzQ_zZx088cHTQhBWhGQUL9Q&oe=685CE4C9' },
    { nombre: 'Guayaba con Chocolate', precio: 0.30, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493678531_2442342606164923_2126182164948836209_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=0BvlnJHAT4sQ7kNvwEzZmz_&_nc_oc=AdnPH20oWny9IBTpMXD_Ih4N1SsbqziFkIH92A0uavr6PjGl9edV_k_eITDCEXTp-Co&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=e-S9_etg84BnB0QuY5oQYg&oh=00_AfPoh36D0JQbeg50wIektRB8quciQZDNFAnLfi_18fGhvg&oe=685CDDD0' },
    { nombre: 'Coco con Chocolate Negro', precio: 0.30, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493325443_2442342512831599_8354342123629414195_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=F7x3ll6h4lUQ7kNvwF9EDdU&_nc_oc=Adlgw3V-xAEEVyYw-PSZurX61Bx9xLs1NeQSAgZdc-EIW_t9LMeAsbx9m75k9hIXNqE&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=e_916O8N3GakZxHo71KWsg&oh=00_AfMagBxXGGdILGhM6J1cwjfICG6qWUkdy8UZYfOmPcqRxA&oe=685CDAEF' },
    { nombre: 'Bocadillos de Babaco', precio: 0.25, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493317727_2442342489498268_2555950841357290884_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=DLgDiEEl_lgQ7kNvwFkxgBN&_nc_oc=Adli_Ok_BPcHhR2VmINxThB7kNbfhAvxqz6vtrEjO1N71Nh2GmXaJvIW_mksKJxjp1Q&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=ouWUVqdN08mZcGF6Q6PkQQ&oh=00_AfN-jv0CTHgvJwPy48yssrKOn-AjIwgg8aolzgml0htKwg&oe=685CD3DC' },
    { nombre: 'Datiles', precio: 0.30, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493225581_2442342729498244_841034306510056041_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=mu8ZMgNDlTMQ7kNvwHYntSs&_nc_oc=AdmDPvNI-zwAkaGZsmsHiwLGo5p-1FqDrOmkS0TFJOvH9WBsXlDtBSiUhe6DHVlDV7g&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=qFLzgD__yo1btZEMQd6hAw&oh=00_AfPi0n933GswpnG-JwRHJZgI4IvBXI_QUvMdPCu2EIWk2g&oe=685CC9BE' },
    { nombre: 'Cascaras de Naranja', precio: 0.30, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493320101_2442342779498239_5483113697499783128_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=kamCVyfatQoQ7kNvwHlCUZX&_nc_oc=AdnmYCvJSXpBLiSnXyh_w7ERzDv-KPmp2XbLHZ1GHjgtmOBF2HZEnWczHYWQm_uEi9k&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=7az4svcXux1E1DeYsWPtZw&oh=00_AfNR-zyyVu9LdSm-C6GzMM07p1YeOuCvIcIdjFcHyBi-6A&oe=685CD99E' },
    { nombre: 'Cocada de Horno con Chocolate', precio: 0.30, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493279059_2442342529498264_1095209561872839711_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=so63Cm58VNoQ7kNvwFW8nga&_nc_oc=AdmZN_ekR60xhrsSEMVAfzubu1c1pdJH0hHHpBwUBblLIqtQcrHis4VwZOU5Z1c00t8&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=35ps4yWsWr3YvN2o_BwOBA&oh=00_AfOoK2Yk8aZHQswT8t4dzXqqgifPV60WrekCFtRszZTRIQ&oe=685CF13C' },   
    { nombre: 'Cocada dos Colores', precio: 0.25, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493486271_2442342576164926_7040804812152019812_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=Gb53zUaM2cMQ7kNvwEIwXK9&_nc_oc=Adm6TYqEBzOv_HZvBs8959EDkpbxnZdODPFyEJ0p8vduj8Lr5yrLZ3HoN78-LNAapaw&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=HSMYOe_ye4sMgnfSy6c24w&oh=00_AfOjaYmF0i2hYp3Klq3q-CJDnpuvTpQ76UL0rtO6pRXz9w&oe=685CEB01' },
    { nombre: 'Chocolate Blanco', precio: 0.30, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493252381_2442341732831677_166380259347715047_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=O0gxIgH-BQoQ7kNvwG6WU_u&_nc_oc=AdmAVyiUqV60KefHKwVssTHYRpPs-C5P4m6RAGOI2CD-bjkPo2lIIVjqdbTtXtYkLtE&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=oJ5A1uR_yiVM5df6SoSUDg&oh=00_AfPaY8T_3wvK0vfLVeq2yO_ymLna-AeB6whhuU3vl5RL6w&oe=685CE12E' },
    { nombre: 'Suspiros', precio: 0.15, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493681173_2442341632831687_7661531199581317353_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=GnyLbL2rcesQ7kNvwE-RBHG&_nc_oc=Adk0wbHHtA9a4kjBdxf5XgMTFBvFY8W-Venfaq-pYhJUQ2riMfop_kbbhkdI1pDnrX4&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=x6MssYCrMY0INi_y6sC9rA&oh=00_AfOtluNfaAJGPJXHPGe8M2X1ym4fId7otGekwR7xCmhW_g&oe=685CE9E3' },
    { nombre: 'Roscas de Viento', precio: 0.30, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493734105_2442342542831596_6402137494900882457_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=DxG_67qs2VIQ7kNvwH2Q80s&_nc_oc=Adn6PgEkoPDW4PZ9yvURpgkUgwwWjIG6PpnvSWOGgJtQN4Np8M6oC5Ar90HS1sjLhsA&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=G8-w61aGF1uD5Wjz86f4Jg&oh=00_AfNPqz0BeCpVx0EJakAb4rKdP_0cc2znOYI-EJjstQM6EA&oe=685CDE55' },
    { nombre: 'Arepas', precio: 0.25, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493246863_2442341726165011_7224300855736239738_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=RI7gcII3pkoQ7kNvwGwdTze&_nc_oc=AdmBi-AdI-G4MzlvunDHdqBwocOASYl5JZbSsKoZOAt63yVihZHyxs3avMpvG03Hj-k&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=DIL3oDJZNz5D0mIhnu9_hg&oh=00_AfMM29JNFtoxtOjHsUR8xuySx5_HfmCrKP6RZW2e7tEHjQ&oe=685CEAB6' },
    { nombre: 'Galletas con Mermelada', precio: 0.25, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493316655_2442341779498339_1372792520081344324_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=gi3sVcYXbFwQ7kNvwHUrpQk&_nc_oc=AdlBsEPLmhjOu2LSK1kyHi2MRvuzobkwjoG9dl38-S00p2M9gisrIVgxsRUt8F8mM3s&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=aFr3imwABTILR86qY_A33A&oh=00_AfNlBxnOeTRReBlYC9-0YZz791J43mkU3FygBL8HjLxldQ&oe=685CEDDE' },
    { nombre: 'Media Nuez', precio: 0.15, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/492540626_2442341609498356_1786129292950539600_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=pKHrKDRHS3IQ7kNvwGfuKB_&_nc_oc=AdkyC_N9YucBh29i-46x16wwj7aocNvf1rgmYPB_6lGcPt4EciQT6StpITcL3VEz8Aw&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=1i0_MPsZjV6CBjjv7KXa1g&oh=00_AfP2hvYNJ-R6g0GnonkZcZClqg4gOvWfZjmUa36sSbN4Zw&oe=685CC7A5' },
    { nombre: 'Chocolate Negro', precio: 0.30, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/492537623_2442342772831573_625225853623940012_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=3IRTwhkgecgQ7kNvwFVGiQX&_nc_oc=Adlk_yh0s84gYGOkTmh8HFj1FkULC5oKyJ04CDx3epcNtoYYOVK3ltIcwtD-KGOAQiY&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=dgD6KVm7JA_hLpWyHP3EUw&oh=00_AfMFT1rr3Bo0bKC-PjP_YcBXl3H2ALPtsGLwKH-b55j1BA&oe=685CDCF7' },
    { nombre: 'Roscas con Chocolate Blanco', precio: 0.40, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493317813_2442342549498262_8738459022633818013_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=vZ7qE9DXPLAQ7kNvwF5P9Nf&_nc_oc=Adnv54IyHRide5a6vgEqWtUztbWIb-qby59mSSQ1M9805TjpEJdLOSE1J3j3cyL82BI&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=K_LlxRs1kznoa0tg-tt3CA&oh=00_AfOmk7ipMcYsS2H50IHpFiVL7SaqzJPNJ8aSeyLon4Y_fg&oe=685CD1ED' },  
    { nombre: 'Roscas con Chocolate Negro', precio: 0.40, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493322378_2442342536164930_937015982593481176_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=g_MBCnTzVAUQ7kNvwEK5gg1&_nc_oc=AdlnqM9Wky3D1n0ZFN9Ohd_kxhYcVEcBcM5o8QRFH0l-o2HBNryx6LOk-iiFswFvjqA&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=7dBHXYbEeSS_Sr-xGLlj4A&oh=00_AfPLcG69HH1pJfdPXqgbP4hZ-Hbdwtd4WAlEdbkxPkIwdQ&oe=685CE967' },
    { nombre: 'Tangos', precio: 0.60, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/492490737_2442342439498273_3580114738215857976_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=ifTGt3mlEmYQ7kNvwHx6RFp&_nc_oc=AdmFoFrL8Q0C72lt9rLE9rvn3EAs_aDJDBEm3WBE36a0ep5WQhyxLkgyhaaraWCXqoU&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=OoaFRfVjLczL46Bk2widCQ&oh=00_AfMnoxIzegQyPwW_mzxLv7Az2xXoq3fW3jZ_hxFKrQPCYg&oe=685CD3C8' }, 
    { nombre: 'Roscas de Mantequlla', precio: 0.25, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493135395_2442342826164901_8713504502788852352_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=w5A9oJv-h-0Q7kNvwG6HoQi&_nc_oc=AdmczuzcV8M9NWIayF9KGQKBl-mEeemno3saLdeMUKNweF7xp-zAzl1siA8S1rBK5kI&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=xQlU8deCqcJ-R1lZom40Cg&oh=00_AfM9TNZq2nfrGXUFppx_73GvR9pNgr6Xyw2qLGu6o-y5mw&oe=685CCAEB' },
    { nombre: 'Quesadillas', precio: 0.35, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493322975_2442342866164897_2437866160683760525_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=zzPJn-OLdn4Q7kNvwGjajVX&_nc_oc=AdkocVLAk3TKVN-3w3bvtKN_hBXQbfa8nibakgzn_4jElfvdQoG9oeNTgYnSXIFJ0XE&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=sL4ek9W_r0bzhCYVqootBA&oh=00_AfO3bzm4LKviFdJT-pwmpmoxskjE7CisKsud_V_YpAadOQ&oe=685CBEBF' },
    { nombre: 'Galletas de Coco', precio: 0.25, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/492684988_2442342839498233_6633323451327476277_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=oofHqDK7T04Q7kNvwFwvNUn&_nc_oc=AdmUSvkltAeXqz27RtCK2sKeD3nvLAiembYzui4QctxjQywTy_CGubFt9GszuNPHZLk&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=xF_9-d4NP8CF5ukb2ZSLlg&oh=00_AfP0amwpnlDW9MZffLMa320n6eNhXUd-11go90tMvw6aRQ&oe=685CCA68' },
    { nombre: 'Huevitos de Mani', precio: 0.15, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/492467853_2442342782831572_5659561549640244047_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=J4vupUdVwBYQ7kNvwGGbptB&_nc_oc=AdkK6yH5KuFkNY026FK3iVT443q8RSy4s6pFcwlB2a35Ub8gYl3rb-1HFNejtMWlx2E&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=jEIQmDuj5m1G0AzMCEUWuA&oh=00_AfPoE-Srusvbtcwz1Vp0IVGQM8Ssz5Ve_M8ZJ_j7d1BRhQ&oe=685CBC81' },
    { nombre: 'Alfajores', precio: 0.35, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493099087_2442342836164900_4765484723184940175_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=dbZwJEmueEQQ7kNvwGqwtSW&_nc_oc=AdkpS6Cx0utcaEibVlphniE024p201IBnL6r47zHsByo93nbKMTh_n4K3N73fuuKTZ0&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=m0Mhr0Dn0zz3ux6Qrm8Zjg&oh=00_AfPMqt0Fu517d0aPuXpLbxObFNV40kWIz2gVYe5ENL37_A&oe=685CF6A1' },
    { nombre: 'Turron', precio: 0.20, imagen: 'https://scontent.fcue1-1.fna.fbcdn.net/v/t39.30808-6/493311043_2442342466164937_8098333092587592141_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=PwzWDt3rE_wQ7kNvwH3yNJr&_nc_oc=Adn4PkxRolHO4D94j2Qs2O22NnmAzXlaZQmBniugyDsrTbMILluBW1WhPhb-M9LtEe4&_nc_zt=23&_nc_ht=scontent.fcue1-1.fna&_nc_gid=W7B24c7BskwEONiNn0EkBg&oh=00_AfO1JoJFGQI2Y3tCXypRzQTjjixGq9pgZLqLhp0i6wpjDQ&oe=685CEBBB' },
  ];

  carrito: Dulce[] = [];
  busqueda: string = '';

  constructor(private router: Router) {
    this.cargarCarrito();
  }

  agregarAlCarrito(dulce: Dulce) {
    this.carrito.push(dulce);
    this.guardarCarrito();
  }

  quitarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
    this.guardarCarrito();
  }

  get total(): number {
    return this.carrito.reduce((sum, dulce) => sum + dulce.precio, 0);
  }

  guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  private cargarCarrito() {
    const data = localStorage.getItem('carrito');
    if (data) {
      this.carrito = JSON.parse(data);
    }
  }

  get dulcesFiltrados(): Dulce[] {
    if (!this.busqueda.trim()) return this.dulces;
    const texto = this.busqueda.toLowerCase();
    return this.dulces.filter(d => d.nombre.toLowerCase().includes(texto));
  }

  irAPedidos() {
    if (this.carrito.length > 0) {
      this.router.navigate(['/pedidos']);
    }
  }
}
