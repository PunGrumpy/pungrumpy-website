import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { QuizValueInterface } from '@/types'

export const Quiz: React.FC<{ value: QuizValueInterface }> = ({ value }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={value._key}>
        <AccordionTrigger>{value.question}</AccordionTrigger>
        <AccordionContent>{value.answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
