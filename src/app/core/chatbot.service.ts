import { Injectable, inject } from '@angular/core';
import { CHAT_FAQS, ChatFaq } from './chat.data';
import { HotelService } from './hotel.service';

export interface ChatReply {
  text: string;
  matched: boolean;
  faq?: ChatFaq;
}

@Injectable({ providedIn: 'root' })
export class ChatbotService {
  private readonly hotelService = inject(HotelService);

  answer(raw: string): ChatReply {
    const normalized = this.normalize(raw);
    if (!normalized) {
      return {
        matched: false,
        text: "Posez votre question (tarifs, adresses, services…). Si je ne peux pas répondre, je vous orienterai vers un appel ou un e-mail.",
      };
    }

    let best: { faq: ChatFaq; score: number } | null = null;
    for (const faq of CHAT_FAQS) {
      const score = faq.keywords.reduce((acc, kw) => {
        return normalized.includes(this.normalize(kw)) ? acc + 1 : acc;
      }, 0);
      if (score > 0 && (!best || score > best.score)) {
        best = { faq, score };
      }
    }

    if (best && best.score > 0) {
      return { matched: true, text: best.faq.answer, faq: best.faq };
    }

    const hotel = this.hotelService.selected();
    const phone = hotel.phones[0];
    return {
      matched: false,
      text: `Je n’ai pas trouvé cette information sur le site. Pour une réponse précise, appelez le ${phone} ou écrivez à ${hotel.email}. Vous pouvez aussi ouvrir la page Contactez-nous.`,
    };
  }

  private normalize(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
}
