import SyntaxHighlighter from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl';

export const TechStack = () => {
    const codeString = `
    package tech

    type Tech struct {
        Progamming          []string

        Database struct {
            SQL 	        []string
        }
        
        Infrastructure struct {
            Hosting 		[]string
            OS 				[]string
            Tools 			[]string
            Package      	[]string
        }
    }

    func tech() {
        tech := Tech{
            Progamming: []string{
                "PHP", "Blade(Laravel)", "Argon",
            },
            Database: struct{SQL []string; NoSQL []string}{
                SQL: []string{
                    "MySQL",
                },
            },
            Infrastructure: struct{Cloud []string; OS []string; Tools []string; Observability []string}{
                Hosting: []string{"Vercel"},
                OS: []string{
                    "Linux", "Windows",
                },
                Tools: []string{
                    "Visual Studio Code", "ChatGPT:)", "Github", "Laragon",
                },
                Package: []string{
                    "socialite", "laravel-notify", "excel", "tinker", "sweet-alert",
                },
            },
        }	
    }
    `

    return (
        <div className='rounded-lg'>
            <SyntaxHighlighter language='go'  style={nightOwl} customStyle={{
            background: 'transparent',
            opacity: 1,
            }}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export const Experience = () => {
    const codeString = `
    type ExperienceItem = {
        type: string
        position: string
        duration: string
    }

    type Experience = Record<string, ExperienceItem | ExperienceItem[]>

    type VolunteerItem = {
        position: string
        duration: string
    }

    type Volunteer = Record<string, Volunteer | VolunteerItem[]>

    const experience: Experience = {
        'Indonetwork': {
            type: "Internship",
            position: "Admin",
            duration: "Feb 2022 - May 2022",
        },
        'Freelancer': {
            type: 'Freelance',
            position: 'Backend Engineer',
            duration: 'Sep 2023 - Present',
        }
    }

    const volunteer: Volunteer = {
        'Bellshade': [
            {
                position: 'Helper',
                duration: 'Jan 2022 - Mar 2022'
            },
            {
                position: 'Maintainer',
                duration: 'Apr 2022 - Present'
            },
            {
                position: 'Leader',
                duration: 'Jan 2023 - Present'
            }
        ]
    }
    `

    return (
        <div className='rounded-lg'>
            <SyntaxHighlighter language='typescript'  style={nightOwl} customStyle={{
            background: 'transparent',
            opacity: 1,
            }}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}


export const Feature = () => {
    const codeString = `
    from typing import List

    class Feature:
        name: str
        role: str

    project: List[Feature] = [
        {
            "name": "Management Karyawan",
            "role": "Admin"        
        }, 
        {
            "name": "Penggajian Karyawan",
            "role": "Admin"
        },
        {
            "name": "Rekrutmen Karyawan",
            "role": "Admin"
        },
        {
            "name": "Approve Cuti",
            "role": "Admin"
        },
        {
            "name": "Management Data Pribadi",
            "role": "Admin"
        },
        {
            "name": "Management Data Absensi",
            "role": "Admin"
        },
        {
            "name": "Management Laporan",
            "role": "Admin"
        },
        {
            "name": "Absensi",
            "role": "User"
        },
        {
            "name": "Pengajuan Cuti",
            "role": "User"
        },
        {
            "name": "Izin Sakit",
            "role": "User"
        },
        {
            "name": "Lihat Gaji",
            "role": "User"
        },
    ]
    `

    return (
        <div className='rounded-lg'>
            <SyntaxHighlighter language='python'  style={nightOwl} customStyle={{
            background: 'transparent',
            opacity: 1,
            }}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}