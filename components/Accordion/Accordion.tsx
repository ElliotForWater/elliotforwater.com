import { useState } from 'react'
import classnames from 'classnames'
import { FiChevronRight, FiChevronDown } from 'react-icons/fi'
import styles from './Accordion.module.css'

type AccordionItemProps = {
  title: string
  text: string
}
interface PropAccordion {
  list: AccordionItemProps[]
}

interface AccordionObj {
  item: AccordionItemProps
  isActive: boolean
  onToggle: () => void
}

function AccordionItem({ item, isActive, onToggle }: AccordionObj) {
  const { title, text } = item

  return (
    <li className={classnames(styles.accordionItem, { [styles.active]: isActive })}>
      <div className={styles.accordionTitle} onClick={onToggle}>
        {title}
        <span className={styles.control}>{isActive ? <FiChevronDown /> : <FiChevronRight />} </span>
      </div>
      {isActive && (
        <div className={styles.textWrapper}>
          <div className={styles.text}>{text}</div>
        </div>
      )}
    </li>
  )
}

function Accordion({ list }: PropAccordion) {
  const [isActive, setIsActive] = useState<number | boolean>(0)

  function handleToggle(index) {
    if (isActive === index) {
      return setIsActive(false)
    }
    setIsActive(index)
  }

  return (
    <ul className={styles.accordion}>
      {list.map((item, index) => (
        <AccordionItem onToggle={() => handleToggle(index)} isActive={isActive === index} key={index} item={item} />
      ))}
    </ul>
  )
}

export default Accordion
