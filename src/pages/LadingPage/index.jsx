import { Header } from "../../components/Header"
import { BannerSection } from "../../components/BannerSection"
import { CategoriesSection } from "../../components/CategoriesSection"
import { ProductsSection } from "../../components/ProductsSection"
import { FormSection } from "../../components/FormSection"
import { Footer } from "../../components/Footer"

export const LadingPage = () => {
    return (
        <>
            <Header/>
            <BannerSection/>
            <CategoriesSection/>
            <ProductsSection/>
            <FormSection/>
            <Footer/>
        </>
    )
}