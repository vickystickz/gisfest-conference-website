'use client';
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation';
import TopBgPattern from '@/components/shared/TopBgPattern'
import bgbob from '@/public/assets/bg-patterns/bg-bob.svg'
import { siteConfiguration } from '@/config/siteConfig';
import { AgendaCategory, TAgenda } from '@/config/types';
import { formatPath } from '@/utils/common';
import Session from '@/components/session/Session';
import Agenda from '@/components/agenda/Agenda';
import AllSession from '@/components/session/AllSession';

const SessionPage = () => {
  const { agenda  } = siteConfiguration;
  const [day, setDay] = useState("")
  const router = useParams ();
  const sessionId = parseInt(formatPath(router["session-id"]));

  useEffect(() => {
    agenda.map((agendaDay) =>
      agendaDay.agenda.map((session, index) => {
        if (sessionId === session.id) {
          setDay(agendaDay.name)
        }
      })
    )
  }, [agenda, sessionId, day])

  return (
    <div className='w-full'>
        <TopBgPattern />
        <Image
          src={bgbob}
          alt='bg-isolation'
          className='h-auto w-auto absolute z-0 laptop:left-0 left-0  top-[-2%]'
          />
          <div className='text-white relative top-space'>
          {
            agenda.map((agendaDay) =>
              agendaDay.agenda.map((session, index) => {
                return sessionId === session.id && (
                  <div key={index}>
                      <Session category={session.category} id={session.id} day={agendaDay.name} title={session.title} abstract={session.abstract} speakers={session.speakers}  />
                    </div>
                )
              })
            )
          }
          </div>
          <div className='space-y-8'>
          <h4 className="laptop:text-h3 text-h4 font-p-semibold font-clashDisplay text-tc-0">Other Sessions</h4>
            <AllSession currentSession={{day: day, sessionId: sessionId}} />
          </div>
    
    </div>
  )
}

export default SessionPage