import { useState } from 'react'
import classnames from 'classnames'
import { FiChevronRight, FiChevronDown } from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'
import { isBrowser } from 'react-device-detect'
import ButtonAddToBrowser from '../Buttons/ButtonAddToBrowser'
import styles from './Accordion.module.css'

type AccordionItemProps = {
  title: string
  text: string
  tags: null | string[]
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
  const { title, text, tags } = item
  const hasExtensionTag = tags && tags.includes('extension-button')

  if (!isBrowser && hasExtensionTag) {
    return <></>
  }

  return (
    <li className={classnames(styles.accordionItem, { [styles.active]: isActive })}>
      <div className={styles.accordionTitle} onClick={onToggle}>
        {title}
        <span className={styles.control}>{isActive ? <FiChevronDown /> : <FiChevronRight />} </span>
      </div>
      {isActive && (
        <div className={styles.textWrapper}>
          <div className={styles.text}>
            <ReactMarkdown>{text}</ReactMarkdown>
            {hasExtensionTag && (
              <span className={styles.button}>
                <ButtonAddToBrowser />
              </span>
            )}
          </div>
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
