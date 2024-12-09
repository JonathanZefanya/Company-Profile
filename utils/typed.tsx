import { TypeAnimation } from "react-type-animation";

export default function Typing() {
    return (
        <TypeAnimation
            sequence={[
                "Penggajian Karyawan",
                2000,
                "Absensi Karyawan",
                2000,
                "Rekrutmen Karyawan",
                2000,
                "Laporan Karyawan",
                2000
            ]}
            speed={50}
            repeat={Infinity}
            className="text-[#A3D8FF]"
        />
    )
}